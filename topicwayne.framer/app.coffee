# Import file "topic wayne"
sketch = Framer.Importer.load("imported/topic%20wayne@1x", scale: 0.5)

scroll = new ScrollComponent
	size: Screen.size
	scrollHorizontal: false
	parent: sketch.wayne
sketch.feed.parent = scroll.content
scroll.placeBehind(sketch.postBtn)

sketch.navBar.visible = false
scroll.onMove ->
	if scroll.scrollY > 128
		sketch.navBar.visible = true
	else
		sketch.navBar.visible = false



flow = new FlowComponent
flow.showNext(sketch.wayne, scroll:false)

sketch.feed.onClick ->
	sketch.textOverlay.animate
		x: -635
		options: 
			curve: Bezier.linear
			time: 20