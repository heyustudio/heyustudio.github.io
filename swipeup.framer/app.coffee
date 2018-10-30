# Import file "news lite swipe up"
s = Framer.Importer.load("imported/news%20lite%20swipe%20up@2x", scale: 1)

# main feed
feedScroll = ScrollComponent.wrap(s.feedScroll)
feedScroll.scrollHorizontal = false

# main flow
mainFlow = new FlowComponent
mainFlow.showNext(s.feed, scroll:false)
s.articleItem.onClick ->
	mainFlow.showNext(s.content)
	s.contentNavSolid.visible = true
	s.nextPrompt.visible = true
	s.contentTools.visible = true
s.videoItem.onClick ->
	mainFlow.showNext(s.content)
	pages.snapToPage(s.video,false)
	s.contentNavSolid.visible = false
	s.nextPrompt.visible = false
	s.contentTools.visible = true
s.shortVideoItem.onClick ->
	mainFlow.showNext(s.content)
	pages.snapToPage(s.shortVideo,false)
	s.contentNavSolid.visible = false
	s.nextPrompt.visible = false
	s.contentTools.visible = false
s.contentNav.onClick ->
	mainFlow.showPrevious()

# pages
articleScroll = ScrollComponent.wrap(s.articleScroll)
articleScroll.scrollHorizontal = false

pages = new PageComponent
	width: Screen.width
	height: Screen.height
	scrollHorizontal: false
	superLayer: s.content
pages.placeBehind(s.contentTools)
pages.addPage(articleScroll, "bottom")
pages.addPage(s.video, "bottom")
pages.addPage(s.shortVideo, "bottom")

# article scroll
s.nextPrompt.states.hidden =
	y: 100
s.nextPrompt.states.show =
	y: 0
	options: 
		time: 0.2
s.nextPrompt.stateSwitch("hidden")

articleScroll.onScroll ->
	if articleScroll.scrollY < s.articleContent.height - Screen.height
		pages.scrollVertical = false
	else
		pages.scrollVertical = true
	if articleScroll.scrollY > 300
		s.nextPrompt.animate "show"

s.nextPrompt.onClick ->
	pages.snapToNextPage("bottom",true)
	pages.scrollVertical = true

# pageTransition
pages.onMove ->
	if pages.currentPage == articleScroll
		s.contentNavSolid.visible = true
		s.nextPrompt.visible = true
		s.contentTools.visible = true
	else if pages.currentPage == s.video
		s.contentNavSolid.visible = false
		s.nextPrompt.visible = false
		s.contentTools.visible = true
	else
		s.contentNavSolid.visible = false
		s.nextPrompt.visible = false
		s.contentTools.visible = false

# interactions

