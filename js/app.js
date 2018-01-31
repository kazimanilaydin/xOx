window.addEventListener('load', function(){
	
	window.app = new Vue({
		el: '#app',
		data: {
			showGame: 	true,
			grid: 		Array(9).fill(-1),
			square: 	Array(9).fill(null),
			figure: 	0,
			winner: 	'',
			end: 		false,
		},
		created() {},
		computed: {},
		methods: {

			reset(){
				this.grid 	= Array(9).fill(-1);
				this.square = Array(9).fill(null);
				this.figure = 0;
				this.end	= false;
				this.winner = '';
			},

			select(index){
				if(this.end){ return false; }

				if(this.grid[index] < 0){				

					var figure = this.figure == 0 ? 'O' : 'X'

					var val = this.figure == 0 ? 0 : 1;

					Vue.set(this.grid, index, val);
					Vue.set(this.square, index, figure);

					this.checkWinner(this.grid, figure);

					this.figure = !this.figure;

					// console.log(index, this.square, this.grid);
				}

			},

			/* 	
				[0,1,2]
				[3,4,5]
				[6,7,8]
			*/

			checkWinner(square, figure){

				var wins = ['012', '036', '345', '147', '258', '678', '048', '246'];

				for (var i = 0; i < wins.length; i++){

					var w = wins[i].split('');
					if(square[parseInt(w[0])] == 1 && square[parseInt(w[1])] == 1 && square[parseInt(w[2])] == 1){
						
						console.log("F1", figure);
						this.end = true;
						this.winner = figure;

					}else if(square[parseInt(w[0])] == 0 && square[parseInt(w[1])] == 0 && square[parseInt(w[2])] == 0){
						
						console.log("F2", figure);
						this.end = true;
						this.winner = figure;

					}
				}
			}

		},
		beforeDestroy() {

		}
	});
});