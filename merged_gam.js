let in_browser = typeof(window)!=='undefined';
if(in_browser){
	let display = document.querySelector('#display');
	let titlebox = document.querySelector('#titlebox');
	let notifications = document.querySelector('#notifications');
	canvas= document.querySelector('#canvas');
	canvas.width=960
	canvas.height=540
	tilesize=32
	ctx=canvas.getContext('2d');
	ctx.fillRect(0,0,canvas.width,canvas.height)
	tilemap=new Image();
	tilemap.src='./tiles/TilesetInterior.png'
//	tilemap.onload=()=>{
//		ctx.fillStyle='black';
//		ctx.drawImage(tilemap,0,0)
//	}
//	alert();
		//
}

let title = `
 [0;1;35;95m_[0;1;31;91m__[0;1;33;93m__[0;1;32;92m__[0m         [0;1;33;93m_[0m       [0;1;35;95m_[0m                [0;1;32;92m__[0;1;36;96m__[0;1;34;94m__[0;1;35;95m_[0m [0;1;31;91m__[0;1;33;93m__[0;1;32;92m__[0;1;36;96m_[0m [0;1;34;94m__[0;1;35;95m__[0;1;31;91m__[0;1;33;93m_[0m 
[0;1;31;91m([0m  [0;1;33;93m_[0;1;32;92m__[0;1;36;96m_[0m [0;1;34;94m|\[0m     [0;1;33;93m/[0;1;32;92m([0m [0;1;36;96m([0m    [0;1;35;95m/[0;1;31;91m([0m [0;1;33;93m([0m    [0;1;36;96m/[0;1;34;94m|\[0m     [0;1;33;93m/[0m [0;1;32;92m([0m  [0;1;34;94m__[0;1;35;95m__[0m [0;1;31;91m([0m  [0;1;32;92m__[0;1;36;96m_[0m  [0;1;34;94m([0m       [0;1;32;92m)[0m
[0;1;33;93m|[0m [0;1;32;92m([0m    [0;1;34;94m\[0;1;35;95m|[0m [0;1;31;91m)[0m   [0;1;32;92m([0m [0;1;36;96m|[0m  [0;1;34;94m\[0m  [0;1;31;91m([0m [0;1;33;93m|[0m  [0;1;32;92m\[0m  [0;1;34;94m([0m [0;1;35;95m([0m [0;1;31;91m\[0m   [0;1;32;92m/[0m  [0;1;36;96m|[0m [0;1;34;94m([0m    [0;1;33;93m\|[0m [0;1;32;92m([0m   [0;1;34;94m)[0m [0;1;35;95m|[0m [0;1;31;91m([0;1;33;93m)[0m [0;1;32;92m()[0m [0;1;36;96m|[0m
[0;1;32;92m|[0m [0;1;36;96m(_[0;1;34;94m_[0m   [0;1;31;91m|[0m [0;1;33;93m|[0m   [0;1;36;96m|[0m [0;1;34;94m|[0m   [0;1;31;91m\[0m [0;1;33;93m|[0m [0;1;32;92m|[0m   [0;1;34;94m\[0m [0;1;35;95m|[0m [0;1;31;91m|\[0m [0;1;33;93m([0;1;32;92m_)[0m [0;1;36;96m/[0m [0;1;34;94m|[0m [0;1;35;95m|[0m     [0;1;32;92m|[0m [0;1;36;96m([0;1;34;94m__[0;1;35;95m_)[0m [0;1;31;91m|[0m [0;1;33;93m|[0;1;32;92m|[0m [0;1;36;96m||[0m [0;1;34;94m|[0m
[0;1;36;96m|[0m  [0;1;34;94m_[0;1;35;95m_)[0m  [0;1;33;93m|[0m [0;1;32;92m|[0m   [0;1;34;94m|[0m [0;1;35;95m|[0m [0;1;31;91m(\[0m [0;1;33;93m\[0;1;32;92m)[0m [0;1;36;96m|[0m [0;1;34;94m(\[0m [0;1;35;95m\[0;1;31;91m)[0m [0;1;33;93m|[0m [0;1;32;92m\[0m   [0;1;34;94m/[0m  [0;1;35;95m|[0m [0;1;31;91m|[0m [0;1;33;93m_[0;1;32;92m__[0;1;36;96m_|[0m  [0;1;35;95m__[0;1;31;91m_[0m  [0;1;33;93m|[0m [0;1;32;92m|[0;1;36;96m(_[0;1;34;94m)|[0m [0;1;35;95m|[0m
[0;1;34;94m|[0m [0;1;35;95m([0m     [0;1;32;92m|[0m [0;1;36;96m|[0m   [0;1;35;95m|[0m [0;1;31;91m|[0m [0;1;33;93m|[0m [0;1;32;92m\[0m   [0;1;34;94m|[0m [0;1;35;95m|[0m [0;1;31;91m\[0m   [0;1;32;92m|[0m  [0;1;36;96m)[0m [0;1;34;94m([0m   [0;1;31;91m|[0m [0;1;33;93m|[0m [0;1;32;92m\[0;1;36;96m_[0m  [0;1;34;94m|[0m [0;1;35;95m([0m   [0;1;33;93m)[0m [0;1;32;92m|[0m [0;1;36;96m|[0m   [0;1;35;95m|[0m [0;1;31;91m|[0m
[0;1;35;95m|[0m [0;1;31;91m)[0m     [0;1;36;96m|[0m [0;1;34;94m(_[0;1;35;95m__[0;1;31;91m)[0m [0;1;33;93m|[0m [0;1;32;92m)[0m  [0;1;36;96m\[0m  [0;1;35;95m|[0m [0;1;31;91m)[0m  [0;1;33;93m\[0m  [0;1;36;96m|[0m  [0;1;34;94m|[0m [0;1;35;95m|[0m   [0;1;33;93m|[0m [0;1;32;92m([0;1;36;96m__[0;1;34;94m_)[0m [0;1;35;95m|[0m [0;1;31;91m)[0m   [0;1;32;92m([0m [0;1;36;96m|[0m [0;1;34;94m)[0m   [0;1;31;91m([0m [0;1;33;93m|[0m
[0;1;31;91m|/[0m      [0;1;34;94m(_[0;1;35;95m__[0;1;31;91m__[0;1;33;93m__[0;1;32;92m|/[0m    [0;1;35;95m)_[0;1;31;91m|/[0m    [0;1;36;96m)_[0;1;34;94m)[0m  [0;1;35;95m\[0;1;31;91m_/[0m   [0;1;32;92m([0;1;36;96m__[0;1;34;94m__[0;1;35;95m__[0;1;31;91m_|[0;1;33;93m/[0m     [0;1;34;94m\|[0;1;35;95m/[0m     [0;1;32;92m\|[0m
`;
let title_gray = `
 _______         _       _                _______ _______ _______ 
(  ____ |\     /( (    /( (    /|\     / (  ____ (  ___  (       )
| (    \| )   ( |  \  ( |  \  ( ( \   /  | (    \| (   ) | () () |
| (__   | |   | |   \ | |   \ | |\ (_) / | |     | (___) | || || |
|  __)  | |   | | (\ \) | (\ \) | \   /  | | ____|  ___  | |(_)| |
| (     | |   | | | \   | | \   |  ) (   | | \_  | (   ) | |   | |
| )     | (___) | )  \  | )  \  |  | |   | (___) | )   ( | )   ( |
|/      (_______|/    )_|/    )_)  \_/   (_______|/     \|/     \|

`
let notify;
if(in_browser){
	 notify = s => {console.log(s);notifications.innerText=s;}
	process = {exit : s=>s}//TODO
} else {
	 notify = s => {console.log(s);}
}

let color= {'x':'gray',
	0:"blue",
	'p':"red"
}
let tile= {'x':[0,0],
	0:[32,32],
	'p':[64,64]
}
notify(title);
if(!in_browser){
	localStorage={};
}
if(typeof(localStorage.best_times)==="undefined"){
	localStorage.best_times=[];
}
notify("Which level do you want to play");
let level = 1;
if(level == 0){
	let HEIGHT=2;
	let WIDTH=3;
	let board = Array(HEIGHT).fill(0).map(_=>Array(WIDTH).fill(0));
}
let levels = [
	,
	[[0,0,0,0],
		[0,'x','x',0],
		[0,0,0,0],
		['x',0,0,'x']]
]
tile_pixels=32
let heights=[,4];
let widths=[,4];
let board = levels[level];
let HEIGHT = heights[level];
let WIDTH = widths[level];
//notify(`BEST TIME: ${Number(localStorage["best_time_level_"+level])/100} SECONDS`);
if(in_browser){titlebox.innerText=title_gray;}
//let display=document.createElement('p');
//document.body.appendChild(display);
let print_board = board => {
	board.forEach(h=>console.log(...h));
	console.log('\n');
	if(in_browser){
		display.innerText=''.concat(...board.map(r=>''.concat(...r)+'\n'));
		render_board(board);
	}
};
let render_board = board =>{
	for(let j=0;j<HEIGHT;j++){
		for(let i=0;i<WIDTH;i++){

			ctx.fillStyle=color[board[j][i]];
			ctx.fillRect(i*tilesize,j*tilesize,tilesize,tilesize)
			map_piece=tile[board[j][i]]
			ctx.drawImage(tilemap,...map_piece,tile_pixels,tile_pixels,i*tilesize,j*tilesize,tilesize,tilesize)
		}
	}
}

let is_inbound = (x,y,width=WIDTH,height=HEIGHT) =>{
	return 0<=x && x<WIDTH && 0<=y && y<HEIGHT;
}
let update_board = (x,y,piece_type,b=board)=>{
	if(is_inbound(x,y,WIDTH,HEIGHT)){
		b[y][x]=piece_type;
	}
}
tilemap.onload = () => {
print_board(board);

let pr=_=>print_board(board);
let y=HEIGHT-1;
let x=WIDTH>>1;
let vx=0;
let vy=0;
let WON=0;
board[y][x]='p';
pr();

let starting_time=Date.now();
if(!in_browser){
	const readline = require('readline');
	readline.emitKeypressEvents(process.stdin);
	process.stdin.setRawMode(true);
	process.stdin.on('keypress', (str, key) => {
	act_on_keypress(key);
	});
}
if(in_browser){
	document.addEventListener('keypress', (key) => {
	key.name=key.key;
	key.ctrl=key.ctrlKey;
	act_on_keypress(key);
});
}
let act_on_keypress = key => {
	if (key.ctrl && key.name === 'c') {
		notify('Do you want to quit? (Y/N)');
		document.addEventListener('keypress', (key) => {
			key.name=key.key;
			key.ctrl=key.ctrlKey;

			if(key.name === 'y'){
				process.exit();
			}
		});
	} else {
		//notify(`You pressed the "${str}" key`);
		//notify();
		//notify(key);
		//notify();
		if(key.name==='w'||key.name==='k'){vy=-1};
		if(key.name==='s'||key.name==='j'){vy=+1};
		if(key.name==='a'||key.name==='h'){vx=-1};
		if(key.name==='d'||key.name==='l'){vx=+1};
		//board[y][x]='x';
		update_board(x,y,'x')
		x+=vx;
		y+=vy;
		//if(x<0||x>=WIDTH||y<0||y>=HEIGHT){
		if(!is_inbound(x,y)){
			notify("YOU DIED, BUMBING INTO THE WALL");
			process.exit();
		}
		else{ if(board[y][x]!=0){
			notify("YOU DIED, STEPPING ON THE SPIKES");
			process.exit();
		}
			else {
				//board[y][x]='p';
				update_board(x,y,'p')
				vx=vy=0;
				print_board(board);
				WON=1;
				for(let j=0;j<HEIGHT;j++){
					for(let i=0;i<WIDTH;i++){
						if(board[j][i]==0){
							WON=0;
						}
					}
				}
				if(WON){
					let finish_time = Date.now();
					let clear_time  = finish_time - starting_time;
					notify("HOORAY, YOU'VE WON!!!");
					notify(won_message="YOU'VE CLEARED THE LEVEL IN "+clear_time/1000+" SECONDS!");
					if(typeof(localStorage["best_time_level_"+level])==="undefined" || clear_time < Number(localStorage["best_time_level_"+level])){
						notify(won_message+"\nTHAT'S A NEW RECORD!!!")
						localStorage["best_time_level_"+level]=clear_time;
					}
					process.exit();
				}
			}
		}
	}
};
//notify('Press any key...');
if(typeof(localStorage["best_time_level_"+level])!=="undefined"){ notify(`BEST TIME: ${Number(localStorage["best_time_level_"+level])/1000} SECONDS`);}

//while(1){
}
