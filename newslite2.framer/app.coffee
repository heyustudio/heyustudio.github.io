# Import file "news lite complete up"
s = Framer.Importer.load("imported/news%20lite%20complete%20up@2x", scale: 1)

# main feed
feedScroll = ScrollComponent.wrap(s.feedScroll)
feedScroll.scrollHorizontal = false
videoScroll = ScrollComponent.wrap(s.videoScroll)
videoScroll.scrollHorizontal = false
channels = new PageComponent
	width: Screen.width
	height: Screen.height
	scrollVertical: false
	superLayer: s.feed
channels.placeBehind(s.feedNav)
channels.addPage(feedScroll)
channels.addPage(videoScroll)
feedScroll.onScroll ->
	if feedScroll.velocity.y > -0.2 && feedScroll.velocity.y <= 0.2
		channels.scrollHorizontal = true
	else
		channels.scrollHorizontal = false
videoScroll.onScroll ->
	if videoScroll.velocity.y > -0.2 && videoScroll.velocity.y <= 0.2
		channels.scrollHorizontal = true
	else
		channels.scrollHorizontal = false
channels.onScrollEnd ->
	if channels.currentPage == feedScroll
		s.videoActive.visible = false
	else
		s.videoActive.visible = true


# pages
articleScroll = ScrollComponent.wrap(s.articleScroll)
articleScroll.scrollHorizontal = false
articleScroll2 = ScrollComponent.wrap(s.articleScroll2)
articleScroll2.scrollHorizontal = false
articleScroll3 = ScrollComponent.wrap(s.articleScroll3)
articleScroll3.scrollHorizontal = false
commentScroll = ScrollComponent.wrap(s.commentScroll)
commentScroll.scrollHorizontal = false
videoView = new Layer
	width: Screen.width
	height: Screen.height
	backgroundColor: "#FFFFF"
shortVideoView = new Layer
	width: Screen.width
	height: Screen.height
	backgroundColor: "#000000"
s.videoContent.parent = videoView
s.shortVideoContent.parent = shortVideoView
pages = new PageComponent
	width: Screen.width
	height: Screen.height
	scrollVertical: false
	scrollHorizontal: false
	superLayer: s.content
pages.placeBehind(s.contentTools)
pages.addPage(articleScroll, "bottom")
pages.addPage(articleScroll2, "bottom")
pages.addPage(videoView, "bottom")
pages.addPage(articleScroll3, "bottom") 
pages.addPage(shortVideoView, "bottom")

s.nextPrompt.states.hidden =
	y: 150
s.nextPrompt.states.show =
	y: 0
	options: 
		time: 0.2
s.nextPrompt.stateSwitch("hidden")

s.nextPrompt.onClick ->
	pages.snapToNextPage("bottom",true)
	pages.scrollVertical = true

articleScroll.onScroll ->
	if articleScroll.scrollY > 0 && articleScroll.scrollY < s.articleContent.height - Screen.height
		pages.scrollVertical = false
	else
		pages.scrollVertical = true
	if articleScroll.scrollY > 300
		s.nextPrompt.animate "show"

articleScroll2.onScroll ->
	if articleScroll2.scrollY > 0 && articleScroll2.scrollY < s.articleContent2.height - Screen.height
		pages.scrollVertical = false
	else
		pages.scrollVertical = true
	if articleScroll2.scrollY > 300
		s.nextPrompt.animate "show"

articleScroll3.onScroll ->
	if articleScroll3.scrollY > 0 && articleScroll3.scrollY < s.articleContent3.height - Screen.height
		pages.scrollVertical = false
	else
		pages.scrollVertical = true
	if articleScroll3.scrollY > 300
		s.nextPrompt.animate "show"

# pageTransition
pages.onMove ->
	if pages.currentPage == videoView
		s.contentNavSolid.visible = false
		s.actionsSolid.visible = true
		s.nextPrompt.stateSwitch("hidden")
		pages.scrollVertical = true
	else if pages.currentPage == shortVideoView
		s.contentNavSolid.visible = false
		s.actionsSolid.visible = false
		s.nextPrompt.stateSwitch("hidden")
		pages.scrollVertical = true
	else
		s.contentNavSolid.visible = true
		s.actionsSolid.visible = true

# crossfade
crossfade = () ->
	transition = 
		layerB:
			show:
				x: 0
				opacity: 1
			hide:
				x: 0
				opacity: 0

# main flow
mainFlow = new FlowComponent
mainFlow.showNext(s.home, scroll:false)
s.home.onClick ->
	mainFlow.showOverlayCenter(s.splash)
	Utils.delay 1, ->
		mainFlow.transition(s.feed, crossfade, scroll:false)
s.articleItem1.onClick ->
	mainFlow.showNext(s.content)
	pages.snapToPage(articleScroll,false)
	s.contentNavSolid.visible = true
	s.actionsSolid.visible = true
s.articleItem2.onClick ->
	mainFlow.showNext(s.content)
	pages.snapToPage(articleScroll2,false)
	s.contentNavSolid.visible = true
	s.actionsSolid.visible = true
s.articleItem3.onClick ->
	mainFlow.showNext(s.content)
	pages.snapToPage(articleScroll3,false)
	s.contentNavSolid.visible = true
	s.actionsSolid.visible = true
s.videoItem.onClick ->
	mainFlow.showNext(s.content)
	pages.snapToPage(videoView,false)
	s.contentNavSolid.visible = false
	s.actionsSolid.visible = true
	pages.scrollVertical = true
s.shortVideoItem.onClick ->
	mainFlow.showNext(s.content)
	pages.snapToPage(shortVideoView,false)
	s.contentNavSolid.visible = false
	s.actionsSolid.visible = false
	pages.scrollVertical = true
s.contentNav.onClick ->
	mainFlow.showPrevious()
s.icon_tl_touxiang.onClick ->
	mainFlow.showNext(s.profile)
s.profile.onClick ->
	mainFlow.showPrevious()
s.actionsSolid.onClick ->
	mainFlow.showNext(s.comments)
s.commentNav.onClick ->
	mainFlow.showPrevious()
