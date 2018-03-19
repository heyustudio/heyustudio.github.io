# Import file "topic qiannan"
s = Framer.Importer.load("imported/topic%20qiannan@2x", scale: 1)

p4Video = new VideoLayer
	video: "video/video1.mp4"
	width: 375
	height: 667
	parent: s.page4
p4Video.placeBehind(s.videoOverlay)
p4Video.player.autoplay = true
p4Video.player.loop = true

page = new PageComponent
	parent: s.topic
	width: 375
	height: 667
	scrollVertical: false
page.placeBehind(s.navBar)
page.addPage(s.cover)
page.addPage(s.page2)
page.addPage(s.page3)
page.addPage(s.page4)
page.addPage(s.page5)
page.addPage(s.page6)
page.addPage(s.p7)

s.contentBg.opacity = 0
s.navBarDark.opacity = 0
s.$2.opacity = s.$3.opacity = s.$4.opacity = s.$5.opacity = s.$6.opacity = s.more.opacity = 0.2
page.onMove ->
	s.contentBg.opacity = Utils.modulate(page.scrollX, [0,375], [0,1], true)
	s.navBarDark.opacity = Utils.modulate(page.scrollX, [1875,2250], [0,1], true)
	if page.horizontalPageIndex(page.currentPage) == 0
		s.$1.opacity = 1
		s.$2.opacity = s.$3.opacity = s.$4.opacity = s.$5.opacity = s.$6.opacity = s.more.opacity = 0.2
	else if page.horizontalPageIndex(page.currentPage) == 1
		s.$1.opacity = s.$2.opacity = 1
		s.$3.opacity = s.$4.opacity = s.$5.opacity = s.$6.opacity = s.more.opacity = 0.2
	else if page.horizontalPageIndex(page.currentPage) == 2
		s.$1.opacity = s.$2.opacity = s.$3.opacity = 1
		s.$4.opacity = s.$5.opacity = s.$6.opacity = s.more.opacity = 0.2
	else if page.horizontalPageIndex(page.currentPage) == 3
		s.$1.opacity = s.$2.opacity = s.$3.opacity = s.$4.opacity = 1
		s.$5.opacity = s.$6.opacity = s.more.opacity = 0.2
	else if page.horizontalPageIndex(page.currentPage) == 4
		s.$1.opacity = s.$2.opacity = s.$3.opacity = s.$4.opacity = s.$5.opacity = 1
		s.$6.opacity = s.more.opacity = 0.2
	else if page.horizontalPageIndex(page.currentPage) == 5
		s.$1.opacity = s.$2.opacity = s.$3.opacity = s.$4.opacity = s.$5.opacity = s.$6.opacity = 1
		s.more.opacity = 0.2
	else
		s.$1.opacity = s.$2.opacity = s.$3.opacity = s.$4.opacity = s.$5.opacity = s.$6.opacity = s.more.opacity = 1

s.moreBtn.onClick ->
	page.snapToPage(s.p7)

s.topicName.onClick ->
	page.snapToPage(s.cover)

moreScroll = ScrollComponent.wrap(s.moreFeed)
moreScroll.scrollHorizontal = false

flow = new FlowComponent
flow.showNext(s.timeline)
s.topicItem.onClick ->
	flow.showOverlayCenter(s.topic)
s.closeBtn.onClick ->
	flow.showPrevious()
s.closeBtn1.onClick ->
	flow.showPrevious()
