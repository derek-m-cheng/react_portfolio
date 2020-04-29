export default function Scroll() {
    const scrollTop = document.querySelector(".scrollTop");
		scrollTop.addEventListener("click", function(){
			window.scrollTo(0,0);
		});
}