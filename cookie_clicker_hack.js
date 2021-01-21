//Cookie Clicker Cookie Multiplier Hack
if(window.location.href == web.host3) {
	var cookieMult = 100000000000000000000000000000
	function mult() {
		requestAnimationFrame( mult )
		Game.Earn(cookieMult)
	}
	mult()
}
