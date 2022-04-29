import './style.css'




if (window.matchMedia("(max-width: 1000px)").matches) {
	let menu = document.querySelector('.MENU');
	let list = document.querySelector('.introduction__navAndImages__navBar__list');
	menu.addEventListener('click', () => {
		list.style.transition = 'opacity 0.3s ease-in';
		if (list.style.opacity == 1) {
			menu.src = '/images/icon-hamburger.svg'
			list.style.opacity = '0';
		} else {
			menu.src = '/images/icon-close.svg'
			list.style.opacity = '1';
			list.style.boxShadow = ' 0px 5px 0px 800vh rgba(0, 0, 0, 0.5)';
		}

	})
}

const leftButton = document.querySelector('.leftButton');
const rightButton = document.querySelector('.rightButton');
const contentParagraph = document.querySelector('.introduction__description__paragraph');
const contentTitle = document.querySelector('.introduction__description__title');
const slides = document.querySelector('.introduction__navAndImages__SlidesImgaes')

const data = {
	titles: [`Discover innovative ways to decorate`,
		`We are available all across the globe`,
		`Manufactured with the best materials`
	],

	description: [`We provide unmatched quality, comfort, and style for property
	owners across the country, Our experts combine form and
	function in bringing your vision to life. Create a room in your own
	style with our collection and make your property a reflection of
	you and what you love`, `With stores all over the world, it's easy for you to find furniture for
	your home or place of business. Locally, we're in most major
	Cities throughout the country. Find the branch nearest you using
	our store locator. Any questions? Don't hesitate to contact us
	today.`, `Our modern furniture store provide a high level of quality. Our
	company has invested in advanced technology to ensure that
	every product is made as perfect and as consistent as possible.
	With three decades of experience in this industry, we understand
	what customers want for their home and office.`],
}

const changeButtonStatus = (() => {

	function _disableButton(Button) {
		Button.style.pointerEvents = 'none';
		Button.style.opacity = '0.5';
	}

	function _enableButton(Button) {
		Button.style.pointerEvents = 'auto';
		Button.style.opacity = '1';

	}

	return {
		_enableButton,
		_disableButton
	}
})()

const loadDataToTheDom = () => {

	contentParagraph.innerHTML = data.description[trackData];
	contentTitle.innerHTML = data.titles[trackData];

}


let trackData = 0
changeButtonStatus._disableButton(leftButton);
leftButton.addEventListener('click', (() => {
	return () => {
		changeButtonStatus._enableButton(rightButton);
		if (trackData == 1) {
			changeButtonStatus._enableButton(rightButton);
			changeButtonStatus._disableButton(leftButton);
		}

		trackData--;
		loadDataToTheDom();
		if (trackData == 0) {

			slides.style.setProperty("--transition-value-firstSlide", '0%');
		} else {

			slides.style.setProperty("--transition-value-secondeSlide", '0%');
		}

	}
})())
rightButton.addEventListener('click', (() => {
	return () => {
		changeButtonStatus._enableButton(leftButton);
		if (trackData == 1) {
			changeButtonStatus._disableButton(rightButton);
		}

		trackData++;
		loadDataToTheDom();
		if (trackData == 1) {

			slides.style.setProperty("--transition-value-firstSlide", '-100%');
		} else {

			slides.style.setProperty("--transition-value-secondeSlide", '-100%');
		}



	}
})())