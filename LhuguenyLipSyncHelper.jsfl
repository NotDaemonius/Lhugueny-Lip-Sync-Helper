// THIS CODE IS SHIT, SO SORRY!!!!!!!!
var isError = false

var closed = 0
var slightlyOpen = 1
var halfOpen = 2
var fullyOpen = 3
var teethGap = 4
var wideTeeth = 5
var smallTeeth = 6
var thMouth = 7
var toungeMouth = 8
var oTransitionMouth = 9
var oMouth = 10

var mouths = [
	[ // closed
		null, // closed
		null, // slightlyOpen
		slightlyOpen, // halfOpen
		[
			[halfOpen, slightlyOpen], slightlyOpen
		], // fullyOpen
		[
			[wideTeeth, smallTeeth], smallTeeth
		], // teethGap
		smallTeeth, // wideTeeth
		null, // smallTeeth
		null, // thMouth
		slightlyOpen, //toungeMouth
		null, // oTransitionMouth
		oTransitionMouth // oMouth
	],
	[ // slightlyOpen
		null, // closed
		null, // slightlyOpen
		null, // halfOpen
		halfOpen, // fullyOpen
		null, // teethGap
		null, // wideTeeth
		null, // smallTeeth
		null, // thMouth
		null, //toungeMouth
		null, // oTransitionMouth
		oTransitionMouth // oMouth
	],
	[ // halfOpen
		slightlyOpen, // closed
		null, // slightlyOpen
		null, // halfOpen
		null, // fullyOpen
		null, // teethGap
		null, // wideTeeth
		null, // smallTeeth
		slightlyOpen, // thMouth
		null, //toungeMouth
		slightlyOpen, // oTransitionMouth
		[
			[oTransitionMouth, slightlyOpen], oTransitionMouth
		] // oMouth
	],
	[ // fullyOpen
		[
			[slightlyOpen, halfOpen], halfOpen
		], // closed
		halfOpen, // slightlyOpen
		null, // halfOpen
		null, // fullyOpen
		null, // teethGap
		null, // wideTeeth
		slightlyOpen, // smallTeeth
		[
			[slightlyOpen, halfOpen], halfOpen
		], // thMouth
		null, //toungeMouth
		[
			[slightlyOpen, halfOpen], halfOpen
		], // oTransitionMouth
		[
			[oTransitionMouth, halfOpen], oTransitionMouth
		] // oMouth
	],
	[ // teethGap
		slightlyOpen, // closed
		null, // slightlyOpen
		null, // halfOpen
		null, // fullyOpen
		null, // teethGap
		null, // wideTeeth
		wideTeeth, // smallTeeth
		slightlyOpen, // thMouth
		null, //toungeMouth
		slightlyOpen, // oTransitionMouth
		[
			[oTransitionMouth, slightlyOpen], oTransitionMouth
		] // oMouth
	],
	[ // wideTeeth
		slightlyOpen, // closed
		null, // slightlyOpen
		teethGap, // halfOpen
		teethGap, // fullyOpen
		null, // teethGap
		null, // wideTeeth
		null, // smallTeeth
		slightlyOpen, // thMouth
		teethGap, //toungeMouth
		slightlyOpen, // oTransitionMouth
		[
			[oTransitionMouth, slightlyOpen], oTransitionMouth
		] // oMouth
	],
	[ // smallTeeth
		null, // closed
		null, // slightlyOpen
		wideTeeth, // halfOpen
		[
			[teethGap, wideTeeth], teethGap
		], // fullyOpen
		wideTeeth, // teethGap
		null, // wideTeeth
		null, // smallTeeth
		null, // thMouth
		wideTeeth, //toungeMouth
		null, // oTransitionMouth
		oTransitionMouth // oMouth
	],
	[ // thMouth
		null, // closed
		null, // slightlyOpen
		slightlyOpen, // halfOpen
		[
			[halfOpen, slightlyOpen], slightlyOpen
		], // fullyOpen
		[
			[wideTeeth, smallTeeth], smallTeeth
		], // teethGap
		smallTeeth, // wideTeeth
		null, // smallTeeth
		null, // thMouth
		slightlyOpen, //toungeMouth
		null, // oTransitionMouth
		oTransitionMouth // oMouth
	],
	[ //toungeMouth
		slightlyOpen, // closed
		null, // slightlyOpen
		null, // halfOpen
		null, // fullyOpen
		null, // teethGap
		null, // wideTeeth
		null, // smallTeeth
		slightlyOpen, // thMouth
		null, //toungeMouth
		slightlyOpen, // oTransitionMouth
		[
			[oTransitionMouth, slightlyOpen], oTransitionMouth
		] // oMouth
	],
	[ // oTransitionMouth
		null, // closed
		null, // slightlyOpen
		slightlyOpen, // halfOpen
		[
			[halfOpen, slightlyOpen], slightlyOpen
		], // fullyOpen
		wideTeeth, // teethGap
		null, // wideTeeth
		null, // smallTeeth
		null, // thMouth
		slightlyOpen, //toungeMouth
		null, // oTransitionMouth
		null // oMouth
	],
	[ // oMouth
		oTransitionMouth, // closed
		oTransitionMouth, // slightlyOpen
		[
			[slightlyOpen, oTransitionMouth], oTransitionMouth
		], // halfOpen
		[
			[halfOpen, oTransitionMouth], oTransitionMouth
		], // fullyOpen
		[
			[wideTeeth, oTransitionMouth], oTransitionMouth
		], // teethGap
		[
			[smallTeeth, oTransitionMouth], oTransitionMouth
		], // wideTeeth
		oTransitionMouth, // smallTeeth
		oTransitionMouth, // thMouth
		[
			[slightlyOpen, oTransitionMouth], oTransitionMouth
		], //toungeMouth
		null, // oTransitionMouth
		null // oMouth
	]
]
alert("Tool made by @Daemonius_ on Twitter. Credit isn't needed!\n\nAlso, this rig only supports the 22 mouth frames that come with the frisk rig (EXPECT THE CHIN MOUTH. SO DELETE THAT FRAME)");

var dom = fl.getDocumentDOM()
var timeline = fl.getDocumentDOM().getTimeline()
var selectedLayerIndex = timeline.getSelectedLayers()
var selLayer = timeline.layers[selectedLayerIndex]
if (selLayer == null) {
	alert("ERROR: NO LAYER SELECTED")
	isError = true
}

var layerFrames = selLayer.frames

var keyframes = []
for (var i = 0; i < layerFrames.length; i++) {
	if (i == layerFrames[i].startFrame) {
		keyframes.push(layerFrames[i])
	}
}

if (keyframes.length <= 1) {
	alert("ERROR: SELECTED LAYER DOESN'T CONTAIN ENOUGH KEYFRAMES")
	isError = true
}

function pasteAndModSymbol(ind, type) {
	timeline.pasteFrames(ind)
	selLayer.frames[ind].elements[0].firstFrame = type
}

if (!isError) {
	for (var i = 0; i < keyframes.length; i++) {
		var f = keyframes[i]
		var s = f.elements[0]
		if (s == null) {
			alert("ERROR: KEYFRAME '" + f.startFrame + "' DOESN'T CONTAIN A SYMBOL")
			isError = true
			break
		}

		if (f.startFrame == 0) {
			continue
		}

		var preF = keyframes[i - 1]
		var preS = preF.elements[0]
		var distance = f.startFrame - preF.startFrame - 1

		if (distance == 0) {
			continue
		}

		timeline.copyFrames(f.startFrame)

		var offset = (s.firstFrame >= 11) ? 11 : 0
		var offset2 = (preS.firstFrame >= 11) ? 11 : 0

		var mouthInfo = mouths[s.firstFrame - offset][preS.firstFrame - offset2]
		if (mouthInfo == null) {
			continue
		}

		if (mouthInfo instanceof Array) {
			if (distance == 1) {
				pasteAndModSymbol(f.startFrame - 1, mouthInfo[1] + offset)
			} else {
				pasteAndModSymbol(f.startFrame - 2, mouthInfo[0][0] + offset)
				pasteAndModSymbol(f.startFrame - 1, mouthInfo[0][1] + offset)
			}
		} else {
			pasteAndModSymbol(f.startFrame - 1, mouthInfo + offset)
		}
	}
}

isError ? alert("PROCESS FAILED") : alert("Process Complete Successfully");
