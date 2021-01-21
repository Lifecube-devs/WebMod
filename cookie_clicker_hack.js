//Cookie Clicker Cookie Multiplier Hack
if(window.location.href == 'https://orteil.dashnet.org/cookieclicker/') {
	var cookieMult = 100000000000000000000000000000
	function mult() {
		requestAnimationFrame( mult )
		Game.Earn(cookieMult)
	}
	mult()
}
