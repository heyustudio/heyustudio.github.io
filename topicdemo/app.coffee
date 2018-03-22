# Import file "topic for demo"
s = Framer.Importer.load("imported/topic%20for%20demo@2x", scale: 1)

# Timeline Page
timelineAnimation = new VideoLayer
	video: "videos/topicItemAnimation.mp4"
	width: 320
	height: 568
	parent: s.timeline
timelineAnimation.placeBehind(s.topicItem)
timelineAnimation.player.autoplay = true
timelineAnimation.player.loop = true

# Topic Page
PKAnimation = new VideoLayer
	video: "videos/PKAnimation.mp4"
	y: -5
	width: 320
	height: 140
	parent: s.topicPK
PKAnimation.placeBehind(s.topicPKSubmit)
s.topicPKSubmit.onClick ->
	PKAnimation.player.play()

likeAnimation = new VideoLayer
	video: "videos/likeAnimation.mp4"
	width: 320
	height: 266
	x: 1
	parent: s.topicPost2
likeAnimation.placeBehind(s.topicLikeBtn)
s.topicLikeBtn.onClick ->
	likeAnimation.player.play()

topicScroll = new ScrollComponent
	size: Screen.size
	scrollHorizontal: false
	parent: s.topic
s.topicFeed.parent = topicScroll.content
topicScroll.placeBehind(s.topicCreate)

topicScroll.onMove ->
	if topicScroll.scrollY > 104
		s.topicNavBar.visible = true
	else
		s.topicNavBar.visible = false

# Switching tabs
s.topicTabHighlight.states.pos1 =
	x: 16
	animationOptions:
		time: 0.2
s.topicTabHighlight.states.pos2 =
	x: 86
	animationOptions:
		time: 0.2
s.topicSectionContent.states.featured =
	x: 0
	animationOptions:
		time: 0.2
s.topicSectionContent.states.facts =
	x: -320
	animationOptions:
		time: 0.2

s.s2default.onClick ->
	s.s2active.visible = s.s1default.visible = true
	s.s1active.visible = s.s2default.visible = false
	s.topicTabHighlight.animate("pos2")
	s.topicSectionContent.animate("facts")

s.s1default.onClick ->
	s.s1active.visible = s.s2default.visible = true
	s.s2active.visible = s.s1default.visible = false
	s.topicTabHighlight.animate("pos1")
	s.topicSectionContent.animate("featured")

# Post Page
postScroll = new ScrollComponent
	size: Screen.size
	scrollHorizontal: false
	parent: s.post
s.postContent.parent = postScroll.content
postScroll.placeBehind(s.postCommentInput)

# Flows
flow = new FlowComponent
flow.showNext(s.timeline, scroll:false)
s.topicItem.onClick ->
	flow.showNext(s.topic, scroll:false)
s.topicPostItem.onClick ->
	flow.showNext(s.post, scroll:false)
s.topicCreate.onClick ->
	flow.showOverlayBottom(s.create, scroll:false)
s.topicBackBtn.onClick ->
	flow.showPrevious()
s.postBackBtn.onClick ->
	flow.showPrevious()
s.createPost.onClick ->
	flow.showPrevious()