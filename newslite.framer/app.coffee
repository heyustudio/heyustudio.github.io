# Import file "news lite complete"
s = Framer.Importer.load("imported/news%20lite%20complete@2x", scale: 1)

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

pages = new PageComponent
	width: Screen.width
	height: Screen.height
	scrollVertical: false
	superLayer: s.content
pages.placeBehind(s.contentTools)
pages.addPage(articleScroll, "right")
pages.addPage(articleScroll2, "right")
pages.addPage(s.video, "right")
pages.addPage(articleScroll3, "right") 
pages.addPage(s.shortVideo, "right")

articleScroll.onScroll ->
	if articleScroll.velocity.y > -0.2 && articleScroll.velocity.y <= 0.2
		pages.scrollHorizontal = true
	else
		pages.scrollHorizontal = false

# pageTransition
pages.onMove ->
	if pages.currentPage == s.video
		s.contentNavSolid.visible = false
		s.actionsSolid.visible = true
	else if pages.currentPage == s.shortVideo
		s.contentNavSolid.visible = false
		s.actionsSolid.visible = false
	else
		s.contentNavSolid.visible = true
		s.actionsSolid.visible = true

# main flow
mainFlow = new FlowComponent
mainFlow.showNext(s.feed, scroll:false)
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
	pages.snapToPage(s.video,false)
	s.contentNavSolid.visible = false
	s.actionsSolid.visible = true
s.shortVideoItem.onClick ->
	mainFlow.showNext(s.content)
	pages.snapToPage(s.shortVideo,false)
	s.contentNavSolid.visible = false
	s.actionsSolid.visible = false
s.contentNav.onClick ->
	mainFlow.showPrevious()
s.icon_tl_touxiang.onClick ->
	mainFlow.showNext(s.profile)
s.profile.onClick ->
	mainFlow.showPrevious()
s.contentTools.onClick ->
	mainFlow.showNext(s.comments)
s.commentNav.onClick ->
	mainFlow.showPrevious()
