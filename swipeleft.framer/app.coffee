# Import file "news lite swipe up"
s = Framer.Importer.load("imported/news%20lite%20swipe%20up@2x", scale: 1)

# main feed
feedScroll = ScrollComponent.wrap(s.feedScroll)
feedScroll.scrollHorizontal = false
s.nextPrompt.visible = false

# main flow
mainFlow = new FlowComponent
mainFlow.showNext(s.feed, scroll:false)
s.articleItem.onClick ->
	mainFlow.showNext(s.content)
	s.contentNavSolid.visible = true
	s.contentTools.visible = true
s.videoItem.onClick ->
	mainFlow.showNext(s.content)
	pages.snapToPage(s.video,false)
	s.contentNavSolid.visible = false
	s.contentTools.visible = true
s.shortVideoItem.onClick ->
	mainFlow.showNext(s.content)
	pages.snapToPage(s.shortVideo,false)
	s.contentNavSolid.visible = false
	s.contentTools.visible = false
s.contentNav.onClick ->
	mainFlow.showPrevious()

# pages
articleScroll = ScrollComponent.wrap(s.articleScroll)
articleScroll.scrollHorizontal = false

pages = new PageComponent
	width: Screen.width
	height: Screen.height
	scrollVertical: false
	superLayer: s.content
pages.placeBehind(s.contentTools)
pages.addPage(articleScroll, "right")
pages.addPage(s.video, "right")
pages.addPage(s.shortVideo, "right")

articleScroll.onScroll ->
	if articleScroll.velocity.y > -0.2 && articleScroll.velocity.y <= 0.2
		pages.scrollHorizontal = true
	else
		pages.scrollHorizontal = false

# pageTransition
pages.onMove ->
	if pages.currentPage == articleScroll
		s.contentNavSolid.visible = true
		s.contentTools.visible = true
	else if pages.currentPage == s.video
		s.contentNavSolid.visible = false
		s.contentTools.visible = true
	else
		s.contentNavSolid.visible = false
		s.contentTools.visible = false

# interactions

