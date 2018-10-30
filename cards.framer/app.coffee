# Import file "news lite cards"
s = Framer.Importer.load("imported/news%20lite%20cards@2x", scale: 1)

# main feed and cards

feedScroll = ScrollComponent.wrap(s.feedScroll)
feedScroll.scrollHorizontal = false

# create card array
cards = []
likes = []
comments = []
contents = []
cards.push(s.card1)
cards.push(s.card2)
cards.push(s.card3)
cards.push(s.card4)
likes.push(s.like1)
likes.push(s.like2)
likes.push(s.like3)
likes.push(s.like4)
comments.push(s.comment1)
comments.push(s.comment2)
comments.push(s.comment3)
comments.push(s.comment4)
contents.push(s.content1)
contents.push(s.content2)
contents.push(s.content3)
contents.push(s.content4)

#initialize
cardScroll = new PageComponent
	x: 5
	y: 70
	width: 500
	height: 548
	scrollHorizontal: false
	clip: false
	superLayer: s.cardOverlay
cardScroll.placeBehind(s.cardNavBar)
for card in cards
	cardScroll.addPage(card, "bottom")

###
s.cardOverlay.visible =	 
s.colorOverlay.opacity = 0
s.cardNavBar.opacity = 0
cardScroll.states.hidden = 
	opacity: 0
	scale: 0.8
cardScroll.states.show =
	opacity: 1
	scale: 1
cardScroll.stateSwitch("hidden")

s.feedContent.onClick ->
	s.cardOverlay.visible = s.colorOverlay.visible = true
	cardScroll.animate "show" 
	s.feedContent.animate
		blur: 4
	s.colorOverlay.animate
		opacity: 1
	s.cardNavBar.animate
		opacity: 1
s.cardNavBar.onClick ->
	cardScroll.animate "hidden"
	s.feedContent.animate
		blur:0
	s.colorOverlay.animate
		opacity: 0
	s.cardNavBar.animate
		opacity: 0
cardScroll.on Events.StateSwitchEnd, (from, to) ->
	if to == "hidden"
		s.cardOverlay.visible =	 s.colorOverlay.visible = false
###

cardTransition = (nav, layerA, layerB, overlay) ->
	transition =
		layerA:
			show:
				blur: 0
			hide:
				blur: 1
		layerB:
			show:
				scale: 1
				opacity: 1
			hide:
				scale: 0.8
				opacity: 0
		overlay:
			show:
				opacity: 0.6
			hide:
				opacity: 0


# card interactions

# swipe left to comments
for card in cards
	card.draggable.enabled = true
	card.draggable.vertical = false
	card.draggable.speedX = 0.5
	card.draggable.constraints =
		x: 0

s.card1.onDragEnd ->
	if s.card1.x < -30
		flow.showNext(s.comment, scroll:false)
s.card2.onDragEnd ->
	if s.card2.x < -30
		flow.showNext(s.comment, scroll:false)
s.card3.onDragEnd ->
	if s.card3.x < -30
		flow.showNext(s.comment, scroll:false)
s.card4.onDragEnd ->
	if s.card4.x < -30
		flow.showNext(s.comment, scroll:false)

# click to comments
for comment in comments
	comment.onClick ->
		flow.showNext(s.comment, scroll:false)
s.commentBack.onClick ->
	flow.showPrevious()
s.comment.onSwipeRight ->
	flow.showPrevious()

# like
s.likedAnimation.opacity = 0
s.likedAnimation.scale = 0.5
showLike = new Animation s.likedAnimation,
	opacity: 1
	scale: 1
	options:
		time: 0.5
hideLike = showLike.reverse()
showLike.on Events.AnimationEnd, hideLike.start
hideLike.onAnimationEnd ->
	s.likedAnimation.visible = false
for like in likes
	like.onClick ->
		s.likedAnimation.visible = true
		showLike.start()



# article page
articleScroll = ScrollComponent.wrap(s.articleScroll)
articleScroll.scrollHorizontal = false

# comment page
commentScroll = ScrollComponent.wrap(s.commentScroll)
commentScroll.scrollHorizontal = false


# page flows
flow = new FlowComponent
flow.showNext(s.feed, scroll:false)
s.feedContent.onClick ->
	flow.transition(cardScroll, cardTransition)
	flow.header = s.cardNavBar



for content in contents
	content.onClick ->
		flow.showOverlayCenter(s.article, scroll:false)

s.articleBack.onClick ->
	flow.showPrevious()
s.article.onSwipeRight ->
	flow.showPrevious()


