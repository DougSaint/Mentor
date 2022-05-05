
document.addEventListener('click', (e) => {
	const btnDropdown = e.target.classList.contains('dropdown');
	if(btnDropdown){
		console.log(btnDropdown);
	}
	let cBtn;

	if(!btnDropdown && e.target.closest('.menu_item') != null) return;

	if(btnDropdown) {
		const item =e.target.closest('.menu_item')

		cBtn = item.querySelector('.sub_menu_list')
		cBtn.classList.toggle('show')

	}
	document.querySelectorAll('.sub_menu_list.show').forEach(sub_menu_list =>{
		if(sub_menu_list == cBtn) return;

		sub_menu_list.classList.remove('show');
	})
})

let show = true;

function menu_vertical(){


	const menuSection = document.querySelector(".menu_section")
	const menuToggle = document.querySelector(".menu_toggle")

	document.body.style.overflow = show ? "hidden" : "initial"
	if(show == true){
		document.querySelector(".section").style.opacity ="0.5"
	}
	else{document.querySelector(".section").style.opacity ="1"}
	menuSection.classList.toggle("on", show);
	if (show == true){
		show = false
	}else{
		show = true
	}

}
