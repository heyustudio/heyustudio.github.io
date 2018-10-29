# Import file "Demo视觉"
s = Framer.Importer.load("imported/Demo视觉@1x")
# Import file "Demo其他" (sizes and positions are scaled 1:2)
demoUI = Framer.Importer.load("imported/Demo其他@2x")

# Responsive Scaling
screenW = Framer.Device.screen.width 
screenH = Framer.Device.screen.height
defaultW = 750
defaultH = 1334
ratio = screenW / defaultW

all = new Layer
	width: defaultW, height: defaultH
	scale: ratio
	originY: 0
	y: 0
all.centerX()

# Components
## timeline
feedScroll = ScrollComponent.wrap(s.feed)
feedScroll.scrollHorizontal = false
feedScroll.height = defaultH

categoryScroll = ScrollComponent.wrap(s.categories)
categoryScroll.scrollVertical = false
categoryScroll.width = defaultW

highlightPage = new PageComponent
	parent: s.highlights
	width: 750
	height: 394
	scrollVertical: false

highlightPage.addPage(s.hl1)
highlightPage.addPage(s.hl2)
highlightPage.addPage(s.hl3)
s.hl1.x = 24
s.hl2.x = 736
s.hl3.x = 1448

s.highlightsVer2.visible = false

## article
s.articleNavBar.visible = false
articleScroll = ScrollComponent.wrap(s.articleView)
articleScroll.scrollHorizontal = false
articleScroll.width = defaultW
articleScroll.height = defaultH

articleScroll.onMove ->
	if articleScroll.scrollY > 130
		s.articleNavBar.visible = true
	else
		s.articleNavBar.visible = false

## featureVer1
s.featureVer1NavBar.visible = false
featureVer1Scroll = ScrollComponent.wrap(s.featureVer1View)
featureVer1Scroll.scrollHorizontal = false
featureVer1Scroll.width = defaultW
featureVer1Scroll.height = defaultH

featureVer1Scroll.onMove ->
	if featureVer1Scroll.scrollY > 130
		s.featureVer1NavBar.visible = true
	else
		s.featureVer1NavBar.visible = false

## featureVer2
s.featureVer2NavBar.visible = false
featureVer2Scroll = ScrollComponent.wrap(s.featureVer2View)
featureVer2Scroll.scrollHorizontal = false
featureVer2Scroll.width = defaultW
featureVer2Scroll.height = defaultH

featureVer2Scroll.onMove ->
	if featureVer2Scroll.scrollY > 130
		s.featureVer2NavBar.visible = true
	else
		s.featureVer2NavBar.visible = false

## featureVer3

featureVer3Scroll1 = ScrollComponent.wrap(s.featureVer3Article1View)
featureVer3Scroll1.scrollHorizontal = false
featureVer3Scroll1.width = defaultW
featureVer3Scroll1.height = defaultH

featureVer3Scroll2 = ScrollComponent.wrap(s.featureVer3Article2View)
featureVer3Scroll2.scrollHorizontal = false
featureVer3Scroll2.width = defaultW
featureVer3Scroll2.height = defaultH

featureVer3Page = new PageComponent
	parent: s.featureVer3Cover
	width: defaultW
	height: defaultH
	scrollVertical: false
featureVer3Page.placeBehind(s.featureVer3NavBar)

featureVer3Page.addPage(s.featureVer3CoverContent)
featureVer3Page.addPage(featureVer3Scroll1)
featureVer3Page.addPage(featureVer3Scroll2)


# flow
flow = new FlowComponent
	parent: all
	width: all.width
	height: all.height

## timeline
flow.showNext(s.timeline)
s.clickToArticle.onClick ->
	flow.showNext(s.article)
s.backBtn.onClick ->
	flow.showPrevious()
s.clickToFeature.onClick ->
	flow.showOverlayBottom(demoUI.featureVerSelect)

## highlights version
s.clickToSelectVer.onClick ->
	flow.showOverlayBottom(demoUI.timelineVerSelect)
demoUI.timelineVer1.onClick ->
	s.highlightsVer2.visible = false
	flow.showPrevious()
demoUI.timelineVer2.onClick ->
	s.highlightsVer2.visible = true
	flow.showPrevious()
demoUI.Cancel_Button1.onClick ->
	flow.showPrevious()

## feature select
demoUI.Cancel_Button.onClick ->
	flow.showPrevious()
demoUI.ver1.onClick ->
	flow.showNext(s.featureVer1)
s.featureVer1BackBtn.onClick ->
	flow.showPrevious()
demoUI.ver2.onClick ->
	flow.showNext(s.featureVer2)
s.featureVer2BackBtn.onClick ->
	flow.showPrevious()
demoUI.ver3.onClick ->
	flow.showNext(s.featureVer3Cover)
s.featureVer3BackBtn.onClick ->
	flow.showPrevious()
demoUI.simpleVer1.onClick ->
	flow.showNext(s.simpleFeatureVer1)
s.simpleFeatureVer1.onClick ->
	flow.showPrevious()
demoUI.simpleVer2.onClick ->
	flow.showNext(s.simpleFeatureVer2)
s.simpleFeatureVer2.onClick ->
	flow.showPrevious()
demoUI.simpleVer3.onClick ->
	flow.showNext(s.simpleFeatureVer3)
s.simpleFeatureVer3.onClick ->
	flow.showPrevious()