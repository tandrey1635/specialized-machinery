function changeAllTabs() {
	const tabs = document.querySelectorAll('.catalog__list')
	const tabsContent = document.querySelectorAll('.catalog__tabs__item')

	function showAllTabs(selector, className) {
		selector.forEach(function(tab) {
			tab.classList.add(className)
		})
	}

	function showTabs(selector, className, i) {
		selector[i].classList.add(className)
	}

	function hideTabs(selector, className) {
		selector.forEach(function(tab) {
			tab.classList.remove(className)
		})
	}

	function activateTab(i) {
		hideTabs(tabs, 'active-tabs-list')
		hideTabs(tabsContent, 'show-tabs-item')
		showTabs(tabs, 'active-tabs-list', i)

		if (i == 0) {
			showAllTabs(tabsContent, 'show-tabs-item')
		}

		else {
			showTabs(tabsContent, 'show-tabs-item', i - 1)
		}

		showMoreClick()
	}

	activateTab(0)

	tabs.forEach(function(tab, i) {
		tab.addEventListener('click', function() {
			activateTab(i)
		})
	})
}

let showMoreHandler = null

function showMoreClick() {
	const showMoreBtn = document.querySelector('.show-more__btn')
	const activeTabs = document.querySelectorAll('.show-tabs-item')

	if (!showMoreBtn) return

	let showCard = 6
	const step = 3

	const cardsItem = []
	activeTabs.forEach(function(tab) {
		tab.querySelectorAll('.catalog__item').forEach(function(card) {
			return cardsItem.push(card)
		})
	})

	function hideCardsItem() {
    	cardsItem.forEach(function(card) {
			card.classList.add('catalog__item_no-active')
		})
	}

  	function showCardsItem(start, end) {
    	cardsItem.slice(start, end).forEach(function(card) {
			card.classList.remove('catalog__item_no-active')
		})
	}

	function hideEmptyTabs() {
		activeTabs.forEach(function(tab) {
			const hasVisibleCards = tab.querySelector('.catalog__item:not(.catalog__item_no-active)')
			tab.classList.toggle('show-tabs-item', hasVisibleCards)
		})
	}

	function toggleShowMoreBtn() {
		if (showCard >= cardsItem.length) {
			showMoreBtn.classList.add('btn_hide')
		}

		else {
        	showMoreBtn.classList.remove('btn_hide')
      	}
	}

	function updateCard() {
		showCard += step
		toggleShowMoreBtn()
	}

	hideCardsItem()
	showCardsItem(0, showCard)
	hideEmptyTabs()
	toggleShowMoreBtn()


	if (showMoreHandler) {
    	showMoreBtn.removeEventListener('click', showMoreHandler)
  	}

	showMoreHandler = function() {
		showCardsItem(showCard, showCard + step)
		hideEmptyTabs()
		updateCard()
	}

  	showMoreBtn.addEventListener('click', showMoreHandler)
}

changeAllTabs()