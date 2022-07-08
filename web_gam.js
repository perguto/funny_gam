let display = document.querySelector('#display');
let titlebox = document.querySelector('#titlebox');
let notifications = document.querySelector('#notifications');
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

let notify = s => {console.log(s);notifications.innerText=s;}
let process = {exit : s=>s}
notify(title);

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
let heights=[,4];
let widths=[,4];
let board = levels[level];
let HEIGHT = heights[level];
let WIDTH = widths[level];
titlebox.innerText=title_gray;
//let display=document.createElement('p');
//document.body.appendChild(display);
let print_board = board => {
	board.forEach(h=>notify(...h));
	notify('\n');
	display.innerText=''.concat(...board.map(r=>''.concat(...r)+'\n'))
};
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
document.addEventListener('keypress', (key) => {
	key.name=key.key;
	key.ctrl=key.ctrlKey;
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
		board[y][x]='x';
		x+=vx;
		y+=vy;
		if(x<0||x>=WIDTH||y<0||y>=HEIGHT){
			notify("YOU DIED, BUMBING INTO THE WALL");
			process.exit();
		}
		if(board[y][x]!=0){
			notify("YOU DIED, STEPPING ON THE SPIKES");
			process.exit();
		}
		board[y][x]='p';
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
			notify("YOU'VE CLEARED THE LEVEL IN "+clear_time/1000+" SECONDS!");
			process.exit();
		}

	}
});
notify('Press any key...');

//while(1){

