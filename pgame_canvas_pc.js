(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.GameBackScreen = function() {
	this.initialize(img.GameBackScreen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,846,597);


(lib.HelpButton_PC = function() {
	this.initialize(img.HelpButton_PC);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,43);


(lib.HelpButton_PC_Push = function() {
	this.initialize(img.HelpButton_PC_Push);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,42);


(lib.helpsheet2 = function() {
	this.initialize(img.helpsheet2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,843,597);


(lib.LineButton_PC = function() {
	this.initialize(img.LineButton_PC);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,43);


(lib.LineButton_PC_Push = function() {
	this.initialize(img.LineButton_PC_Push);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,43);


(lib.nannidoupsheet = function() {
	this.initialize(img.nannidoupsheet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,542,258);


(lib.owan = function() {
	this.initialize(img.owan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,80);


(lib.poster = function() {
	this.initialize(img.poster);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,479,378);


(lib.RestartButton_PC = function() {
	this.initialize(img.RestartButton_PC);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,43);


(lib.RestartButton_PC_Push = function() {
	this.initialize(img.RestartButton_PC_Push);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,43);


(lib.ResultScene = function() {
	this.initialize(img.ResultScene);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,844,597);


(lib.ResultSheet = function() {
	this.initialize(img.ResultSheet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,843,596);


(lib.shape = function() {
	this.initialize(img.shape);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,100);


(lib.StartButton_PC = function() {
	this.initialize(img.StartButton_PC);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,46);


(lib.StartButton_PC_Push = function() {
	this.initialize(img.StartButton_PC_Push);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,42);


(lib.TopScene = function() {
	this.initialize(img.TopScene);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,843,596);


(lib.TwitterButton_PC = function() {
	this.initialize(img.TwitterButton_PC);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,43);


(lib.TwitterButton_PC_Push = function() {
	this.initialize(img.TwitterButton_PC_Push);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,43);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.TwitterButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.TwitterButton_PC();

	this.instance_1 = new lib.TwitterButton_PC_Push();
	this.instance_1.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220,46);


(lib.ResultSheet_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACKEPQArgWALgTQgbgZgkgDIgTADQgjAIgpAcQgoAbgcgDQgYgDgcgQQgpgWgNgWIgGgIIgbAGIghAmQgmAWgZgZIgQgWQgWgbAbAAQAOgDApAOIAQAAQA/gpBKgcQgOgFgLgIQgpghgjhSQAAgHAOAAQAQACAhAKQALgFAIgHQATgTAFgeQAGgkAAhEQAAgvgDgbIgFgLQgLgTgTgJQgLgIATAAQAhgFATAAQAbADASAbQALAIAAAWIAAAOQADAbgFAbIATgCQALgGgJgLQA0AAAZARQAWALgDAYQgLARgYAKQghAOgcAAQgNAAgRgFQgKAmgTAZIAYgGQAhgFAmACQAmAGAcAgQAAALgJALQgQANgWAZQgLALgLAIQALAIAAARQgDALgYACQg0AIiCA6QAFAFAIAGQAsAQAeAAQBJgmAxgLQAbgDAkAAQAmAAAsAWQAsAWAYAeQAGAIgGAIQgYAWgxALQgUADgTAAQgjgIgIgIgAg9AhIgOALQAIAYARARQAjgOALgLQAbgWATgWQgmAAhBARg");
	this.shape.setTransform(678.7236,-265.025);

	this.syougou = new cjs.Text("", "55px 'HGSGyoshotai'", "#FFFFFF");
	this.syougou.name = "syougou";
	this.syougou.textAlign = "center";
	this.syougou.lineHeight = 57;
	this.syougou.parent = this;
	this.syougou.setTransform(507,-177.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AheDtQg6g3gTgpIADAAIAOALQATAQAhALQAgALAhAAQAcAAAig0QAOgbACgIQADgOAAgZQAAgQgWAAQgfAGgWAFIgOAAQgOgTgCgRQAAgTAegdIhCAOQg5AFhdAgQgOADgLgLQgWgVAbgOIAUADQBJgICRhYIALgNIgWgsQADgFATgOQAjgWAIgIIAAgGQgWgQgKAAQgjAIgTApQAIATADAeQAAAOgOAAQgWAAgZghQgbgjAAg8QAAgRAIADQAcATAQAbQAxgpAwgLIAygLQAQAAAWAJQAQAFAZAcQAFANgFADIhCA8IALALQADADAAALIgOAIQgmATgbAQIArAZIA0AAIAsgFQAhgLATAAQAZAAAWALQAbANAIAOIgLAQQgQAGgZAAQhigLhVAFIgTATQAIgFgWAYQAIAFARAAQAxAOAbAhQAABJgrBHQgsBIg2AQQgTAAgxgxgAhWg3QAZAAAQgFQAQgGAJAAQgDgIgGgFQggALgZANg");
	this.shape_1.setTransform(209.3561,-154.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAHCkIADgCQAcAIAjAFQAZADAAgxQAAg0gGg6QgIg7gbAAIgRgNQgYgUAQgWQA3hJACgpQgIgLgQgGQgRgFAUgGIArgNQAsgJAGBCQgZAxgWAnQAkgGAugQIAOAAQAQAAALAIQATATgNAIIghAOIhjAeIgFADQAeAeAIANQAGAKAAAhQAAAxACBFQAAAhgIAVQgIAWgZARQg2gDgyhVgAiRDpQgQgOAAgQQAIgsADgpIADgWQg0AhgsAIQgvAFAAgmQAAgQAWgRIA3g8IAbgaQguAPgxALQgvAIAIgwQAAgIATgZQAGAAAFALQAAAGAGAFQA3AAATgNIA8gWIAQgJQAGgegLgTQAFgDAcADQAbAGgDAbQAkgFAIAeQgFAQgsAQIgGAzIA8gtQALgIAAALQgTAbghAoQgTATgCALQgDAIAAAvQgDA0AAApQAAAWgDAFQgCAGgJAAQgTAAgLgLgAi3A6QAZgJALgFQACgLAAgLgAhEBoQgDgLADgLQAIgYARgLQAIgJAIARQAIATAIgDQAYgIAbgTQAGgDgIATQgOAngTATQgSANgRAAQgWAAgQgbgAD+B2QgOgDgIgQQAIgDALgLQgsgmgIgGQAWgFAeAAQAbgDAWATQAWATAAATQAAARgOAFQgNAGghAAgAi8iQQgWgCAAgGQAmgWAbgTIAAgDIgNgWIApgNIAYAAQATAAAnAsQAIAIgWAQQg8AOgWADQgZACgTAAg");
	this.shape_2.setTransform(138.6663,-156.1485);

	this.ScoreText = new cjs.Text("0", "70px 'HGSGyoshotai'", "#FFFFFF");
	this.ScoreText.name = "ScoreText";
	this.ScoreText.textAlign = "center";
	this.ScoreText.lineHeight = 72;
	this.ScoreText.lineWidth = 417;
	this.ScoreText.parent = this;
	this.ScoreText.setTransform(517.5,-300.3);

	this.ClearCountText = new cjs.Text("0", "70px 'HGSGyoshotai'", "#FFFFFF");
	this.ClearCountText.name = "ClearCountText";
	this.ClearCountText.textAlign = "center";
	this.ClearCountText.lineHeight = 72;
	this.ClearCountText.parent = this;
	this.ClearCountText.setTransform(517.25,-409.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXDBQgLgGAIgFIAgALQA2ADAAg6IAAg3QgCgbgGgRQguAnggAYQghAcgTgFIgTg6IALgmQANguARgIQATgLAbAAIAbAAQAVAAAOAFQAZgSAWgcQATgWAjgxIAAgNQguAQgpAQIgTAAQgWAAgRgIQgVgJgIgPQBXgRBagLQBKgFAAAwQAAALhPBNQgfAcgVAbQAQAdADBKQACAZAAArQAAAygFAQQgFANgRATQgIAJgLAAQgsAAg1hSgAg4gGQgIAKAAAmIACAfQA3giAogqQgQgLgLAAQgTgDgQAAQgTAAgIALgAioEKQgZgNgQgjQgGgJAIgIIALgWIAAgmIAAgkIgYAQIgnAXQgNAIgWADQgOAAgIgRQgLgWAIgOQAOgQATgRQATgQBPhsIgxATQgWAJgYACQghAGAAg3IADgWQAFgLAWgGQAFADADAAQgFAJANAHQAvgPA3gXIAAgYIgDgRIgLgQIAQAFQAGgmgGgbQgCgTgRATQgLgFAIgJQAAgIALAAQAJgDAQAAQAbAAALAOQALANAAAnQAAAQgLAkQAcATgDALQgLAYgbAOQgJAxgFAxQAegQAxhBQALgGgFALQgOAsgeAiQgeAmgRARIgCA0IAFAxQADAZAAAZQAAAggIAIQgJAJgHAAIgDgBgAjiBLQATgGAOgNIAAgegAEnCEIhHgQQgTgFgFgRIACgCQAZgJAIgFQgbgYgegXQgIgLANAAIAGAAQAuAAApAZQApAZAGAbQACAkgXAAIgHgBg");
	this.shape_3.setTransform(677.5155,-373.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah7C3QAmgTAkg/QAYhBAAgzQgWgcgLgQQARgLAYAAQAYAFAeAWQAvgYAug0IAOgWIhKAAQhGADgnAFIhXAQQgkgFhXguQAmAAATACQAygCArgGQA8gIAfAAQBRgDA0AAQANgDAOgFQAxAIAsAsQAQATgjALQgsAmgsAcQg8AggbAAQgLBngnAsQgiAshSAQIgFAAQgKAAAHgLg");
	this.shape_4.setTransform(269.1618,-262.5555);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AASCYQg1gDgyANQgeABgcgWQgYgTgLgLQBrgQCCgEQAQglAGg5QAFg5ADgpIhHgDQhMACgmAJQgTAAg3gkQgOgIgFgIIC9gGQAigCAsAFQALgFALgJQBSAmAIAXQgCANgJAOQgZB1gPBkQgMAUgTgBQghgKg5AAg");
	this.shape_5.setTransform(198.35,-264.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABtB5QhBhEgcgRQhAA3hHAmQhFAhgggGQgTgCgJgLQAbgGAkgQQC5h9BFiDQhPAQgxAJQgOgGgVgQQgfgWgQgIQgDgDgLgDQBSAAAugDQA/gCAbgJQARgQASAFQAvARATAZQAFAIgFAFQgTATgTAZQgyBHgpAoQAUAGAeANQCDA3AhBBQAAARgGALQgIALgYAAQgZAAhNhKg");
	this.shape_6.setTransform(127.95,-264.2845);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABzENQgNgYgGgjQgFgnAAg6IAChHIgCg1QgWACgTAAQgcABgWgGQgfgIAAgJIAfgQQA/gQAhgFIADhpIADgdQAAgJgDgIQgZgLAAgGQAAgdAWgRQALgLATALQAvAcAAAjIgIA2QgDAigDA2QATAAAOgCQALgEAQAAQAkAAAbAfQALALgOAIQgQAIgbAAQgWAAgegGIgTAGIAAA4QACA0gCAcQAAATgJBaQgIAjgQAiQgIgDgJgRgAizDcQghgYgjhAQAAgHANgMIAGADIAhAbQBHg5A0ADQA5ACgLAWIgOATQgpA6gNALQgWARgTAAIgOACQgIAFgHAAQgIAAgHgFgAilCoIAQATQAegeALgbQgjANgWAZgAigBQQATgQgNgFQgLgFgJgJQAZgIATgIQApgLALAQQAGAOgGAFIgQAMIg3APQgCADgDAAQgDAAgDgDgAiPgBQgUgHgQgRIADgDQAFgCARAFIA2gOIAWADQADAFAAAGQAAAOgLAIQgLAFgWAAgAh6hIQALgHgFgGQhPAWgyAFQgQgFgWgfQgFgNACgFQARAFAYAFIAvgIQBzgdALAAQAgAKAAATIgQAOQgbAWgZALQgQAFgRAJgAiKjFQgIgOgTgLQANgNAWgDQAIAAAOgDQAIAAAcAQQAYAOAAAZQAAAQgIAFQgOAGgYAAQgWAAgWgmg");
	this.shape_7.setTransform(206.7029,-374.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKD8QgWgRAAgQQAJgWAIgDQASgIAQgbQhDAOgTAgQAAAegLAJQg/gGg3htQAAgDAIAAQA0AeAhAZIAngeQApgkBkgWQANgFAGACQAYAOAUARQAQAQgOAFQg2BCgUAWIARAQQADAGAAANQAAALgRADQgugDgjgYgADVBFQhBghgvg5Qg/hMgTgOQgVgQgYACIikCTQghAeg3AcQgbANgGgNIgIgRQgIgQAFgOQALAIALAGQA0gcA0g1QAvg3ApgmQgIgIAAgGQBEgjAZg6QgWgjAQgGQAWAAAHgDQAIgCAJAFQAgAWAOAQQAFAGgIAOQgQAYgZAWQAcAIANARQAeAVAsA6QAWAZAWAKQATAJAhATQBXAwAGAQQADAOgDALQAAAIgTAIQgcAAg/gggAhDA0QgkgTgIgIIADgDQApgTBJgNQA0gIAAAlQAAAZgcAOQgbALgQAAQgVAAghgRg");
	this.shape_8.setTransform(138.1039,-375.8391);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhBE7QgVgSg1hDQgOgRAAgHQAEgLAOAOQAmAHAgAAQAgAAAAgRIAAh/QAAgcgEgVQggAAheAcQAKAcALAOIAKALQAVgLAOgOQAEAOgEALQAAAggfAjIg5A7QgjAEgfhGQAcgyAcg4IgnALQgmAKgnAEQgjAAgOgLQgVgKgLgZQgDgHAcgOQAcgLAmgUQASgDAHADIgOARIAAADQCegbBfgOQAEgcgEgKIgjAKQgVAHgOAAQgVAAgZgcQg1gugcivQAAgOAOAKQAZAZAjAqQALAOARARIBjgjIAAgVQgLAAgOAOQAHgcAHgKIgcAAQgOAAgVAHQAcgnBagOQBKgHAgAAQAVAAARAKQASAHAuAnQAVASAAARQgVBjgqA4QgnAxgVAAQgjgOgugKIAAAjQBKADBwALIAugHQBUAVAnApQAEALgEAKQgHASgcAAQh/gggjgKQgugPhGAAIguAEIAABbQAAAnAEAZQADAfAAAyQAAAqgHARQgHAggVADQgiAAgjgfgAhhh1IAOgDQArggADgcQgnAEgcgHQgOgHgKgEQAHAuAYAfgABAh/QAZgSAYgtIAchVIgOgVIgjgDQgmAAgkADQAZAOADAZQArAKAAAcIgLAPQgYADgLASQgEAcgOAYIAMgBQANAAAOAFgACUDKQgOgOALgOQAOgOAEgHIgWgRQgmgggSgLQgKgHgHgRQBpAHAjAOQAgAOAqA4QAEASAAAcQgEAVhDAAQgmAAgdgZg");
	this.shape_9.setTransform(473.3681,-466.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AkpFNQgjgVgVgRQgKgLAAgVQADgcAOgjQALgVAHARQAOAuAnAAIBeg8QBfg8AggmQAcgVgHAVQgVA0g8A8QhGBDhYBGQgHACgGAAQgHAAgFgCgAEFFGQhQgfgugPIgjAPQhDgZg0hRQgYguA3AAQA1gqBbgqQhDASgVgLQgOgLgEgVQgDgRAKgLQAWgJARgEQAZgKAVgHQgEgVAAgSQhfgLgmgqIBmgRQAVgEARgHIAEgjIADg4IAAgOQAAgLgDgDQgSgOgVgPQgVgKAAgHQAqgZAjAAQAZAAAZAgQAYAcAAAZIgHA0IgDAZQAYgEAOgHQBDgHAcArQAAAHgHAOQgYAOg8AVQgZAHgRAKIgEAnIASAEQAjAHASARQAKANgRAOQg1AggcALQguAVgjAKQg8ALg1A0QAHASALAEQBGg8CpgZQAgAAAcALQAVAHAHAOQAHAOgEAHQgVAKgYArQgZAqgLAOIAkAgQAKAKgHAOQgHASgVAAgABZDPQAVARASAZQBYgVAfhAQgOgCgNAAQhFAAg+AtgAjtCBIAug0QhGAcAAhAQADgVAHgHIAggbIAHgOQgZAAgfAOQgSAHgHAAIgOgVQgVgjAOgOIAnggQA0gxBAhYIAAgHIgWgRQgKgEAOgOQASgOAmAAQAHAAAZAKQAYALASAcQAHAHgHAHIgLAOQhNBDg8A4IAHAEQASAAAggVQAYgSAOAHQAgASASAOQAAAOgnAjQg1A0gHADQAAAHALgDIAjgRQA4gOAAAiQAAAHgjAjQguArhKAcQgRAGgJAAQgGAAgDgDg");
	this.shape_10.setTransform(382.2833,-470.7125);

	this.instance = new lib.ResultSheet();
	this.instance.setTransform(0,-597);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.ClearCountText},{t:this.ScoreText},{t:this.shape_2},{t:this.shape_1},{t:this.syougou},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ResultSheet_1, new cjs.Rectangle(0,-597,843,596), null);


(lib.RestartButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.RestartButton_PC();

	this.instance_1 = new lib.RestartButton_PC_Push();
	this.instance_1.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220,46);


(lib.NanidoUp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.nannidoupsheet();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.NanidoUp, new cjs.Rectangle(0,0,542,258), null);


(lib.LineButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.LineButton_PC();

	this.instance_1 = new lib.LineButton_PC_Push();
	this.instance_1.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220,46);


(lib.HelpSheet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.helpsheet2();
	this.instance.setTransform(0,-599);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HelpSheet, new cjs.Rectangle(0,-599,843,597), null);


(lib.HelpButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.HelpButton_PC();

	this.instance_1 = new lib.HelpButton_PC_Push();
	this.instance_1.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220,45);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.StartButton_PC();

	this.instance_1 = new lib.StartButton_PC_Push();
	this.instance_1.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220,46);


(lib.PageTop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Component
	this.helpsheet = new lib.HelpSheet();
	this.helpsheet.name = "helpsheet";
	this.helpsheet.setTransform(321.1,-221.45,0.7601,0.7434,0,0,0,421.1,-299.9);

	this.helpbutton = new lib.HelpButton();
	this.helpbutton.name = "helpbutton";
	this.helpbutton.setTransform(413.1,462.45,0.8219,0.8224,0,0,0,109.7,22.1);
	new cjs.ButtonHelper(this.helpbutton, 0, 1, 2);

	this.botan = new lib.button();
	this.botan.name = "botan";
	this.botan.setTransform(139,442,0.8219,0.8219);
	new cjs.ButtonHelper(this.botan, 0, 1, 2);

	this.instance = new lib.TopScene();
	this.instance.setTransform(0,0,0.7604,0.8087);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.botan},{t:this.helpbutton},{t:this.helpsheet}]}).wait(1));

	// BackGround
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("Egx/AlgMAAAhK/MBj/AAAMAAABK/g");
	this.shape.setTransform(320,240);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PageTop, new cjs.Rectangle(0,-443.7,641.8,925.7), null);


(lib.PageResult = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Component
	this.twitterButton = new lib.TwitterButton();
	this.twitterButton.name = "twitterButton";
	this.twitterButton.setTransform(402.6,441.4,0.6249,0.6471);
	new cjs.ButtonHelper(this.twitterButton, 0, 1, 2);

	this.lineButton = new lib.LineButton();
	this.lineButton.name = "lineButton";
	this.lineButton.setTransform(258.65,440.85,0.5636,0.6569);
	new cjs.ButtonHelper(this.lineButton, 0, 1, 2);

	this.restartButton = new lib.RestartButton();
	this.restartButton.name = "restartButton";
	this.restartButton.setTransform(92.65,440.9,0.6564,0.6564);
	new cjs.ButtonHelper(this.restartButton, 0, 1, 2);

	this.resultSheet = new lib.ResultSheet_1();
	this.resultSheet.name = "resultSheet";
	this.resultSheet.setTransform(320.3,-244.65,0.7647,0.8128,0,0,0,420.8,-298.6);

	this.instance = new lib.ResultScene();
	this.instance.setTransform(-1,-3,0.7629,0.8128);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.resultSheet},{t:this.restartButton},{t:this.lineButton},{t:this.twitterButton}]}).wait(1));

	// BackGround
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99FF66").s().p("Egx/AlgMAAAhK/MBj/AAAMAAABK/g");
	this.shape.setTransform(320,240);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PageResult, new cjs.Rectangle(-1.5,-487.2,644.7,969.5), null);


(lib.PageGame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Component
	this.nannidoup = new lib.NanidoUp();
	this.nannidoup.name = "nannidoup";
	this.nannidoup.setTransform(816.25,268,0.6357,0.6357,0,0,0,271,129);

	this.instance = new lib.poster();
	this.instance.setTransform(174,139,0.2194,0.2194);

	this.ScoreText = new cjs.Text("0", "84px 'HGSGyoshotai'");
	this.ScoreText.name = "ScoreText";
	this.ScoreText.textAlign = "center";
	this.ScoreText.lineHeight = 86;
	this.ScoreText.parent = this;
	this.ScoreText.setTransform(103.1619,96.75,0.6104,0.6104);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag1BPQARgIAPgbQALgdAAgVIgOgTQAHgFAKAAQAKADANAJQAUgLAUgWIAGgKIggAAQgeACgQACIgmAHQgPgCgmgUIAZABQAVgBATgDQAagDANAAIA5gBIAMgEQAVAEATASQAHAJgQAEQgSARgTAMQgaAOgMAAQgFAsgQATQgPATgjAHIgCAAQgFAAADgFg");
	this.shape.setTransform(134.7089,80.8327);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAIBBQgXgBgVAGQgNAAgMgJIgPgNQAugHA3gCQAHgQADgYIADgqIgegCQggACgRADQgIAAgYgPQgGgEgCgDIBRgDQAPgBATACIAJgFQAkAQADAKQgBAFgEAGQgKAygHAsQgFAIgIAAQgPgFgYAAg");
	this.shape_1.setTransform(104.175,79.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAvA0QgcgdgMgHQgcAXgeARQgeAOgOgCQgIgCgEgEQANgDAOgHQBQg1Adg5Ig2ALQgGgCgKgIQgMgJgIgEIgGgCQAkAAAUgBQAbgBALgEQAHgHAJACQAUAIAIAKQACAEgCACQgIAIgJALQgVAfgRAQIAVAJQA4AXAPAdQgBAHgCAEQgEAFgKAAQgLAAghggg");
	this.shape_2.setTransform(73.75,80.0778);

	this.instance_1 = new lib.owan();
	this.instance_1.setTransform(18,10,0.6709,0.6709);

	this.SuccessCount = new cjs.Text("0", "84px 'HGSGyoshotai'");
	this.SuccessCount.name = "SuccessCount";
	this.SuccessCount.textAlign = "center";
	this.SuccessCount.lineHeight = 86;
	this.SuccessCount.parent = this;
	this.SuccessCount.setTransform(157.1619,11.4,0.6104,0.6104);

	this.CountDown = new cjs.Text("0", "84px 'HGSGyoshotai'", "#FFFFFF");
	this.CountDown.name = "CountDown";
	this.CountDown.textAlign = "center";
	this.CountDown.lineHeight = 86;
	this.CountDown.lineWidth = 42;
	this.CountDown.parent = this;
	this.CountDown.setTransform(311.871,366.9,0.6487,0.6487);

	this.instance_2 = new lib.shape();
	this.instance_2.setTransform(257,338,1.0931,1.0931);

	this.instance_3 = new lib.GameBackScreen();
	this.instance_3.setTransform(0,-1,0.7612,0.8057);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00A99D").ss(1,1,1).p("ABFgqQgDAvgQAlQgUAwgdAAQgcAAgVgwQgUgvAAhFQAAgIAAgH");
	this.shape_3.setTransform(260.9875,312.9875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A99D").s().p("AitGcQgVgwAAhFIAAgPQgtgagngoQh0hzAAijQAAikB0hzQBzh0CjAAQCkAABzB0QB0BzAACkQAACjh0BzQhzB0ikAAQgcAAgbgEQgEAxgPAlQgVAwgdAAQgdAAgUgwg");
	this.shape_4.setTransform(273.55,276);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.instance_3},{t:this.instance_2},{t:this.CountDown},{t:this.SuccessCount},{t:this.instance_1},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.ScoreText},{t:this.instance},{t:this.nannidoup}]}).wait(1));

	// BackGround
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FFCC").s().p("Egx/AlgMAAAhK/MBj/AAAMAAABK/g");
	this.shape_5.setTransform(320,240);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PageGame, new cjs.Rectangle(0,-1,988.6,481), null);


(lib.MovieClip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.PageResult = new lib.PageResult();
	this.PageResult.name = "PageResult";
	this.PageResult.setTransform(1600,480,1,1,0,0,0,320,480);

	this.PageGame = new lib.PageGame();
	this.PageGame.name = "PageGame";
	this.PageGame.setTransform(960,480,1,1,0,0,0,320,480);

	this.PageTop = new lib.PageTop();
	this.PageTop.name = "PageTop";
	this.PageTop.setTransform(320,480,1,1,0,0,0,320,480);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.PageTop},{t:this.PageGame},{t:this.PageResult}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MovieClip, new cjs.Rectangle(0,-487.2,1923.2,969.5), null);


// stage content:
(lib.pgame_canvas_pc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.PageTop();
	this.instance.setTransform(1206.3,-108,1,1,0,0,0,320,480);

	this.instance_1 = new lib.PageResult();
	this.instance_1.setTransform(1856.45,-94,1,1,0,0,0,320,480);

	this.instance_2 = new lib.PageGame();
	this.instance_2.setTransform(2386.55,-122,1,1,0,0,0,320,480);

	this.instance_3 = new lib.MovieClip();
	this.instance_3.setTransform(960,480,1,1,0,0,0,960,480);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,-821.2,2735.1,1303.5);
// library properties:
lib.properties = {
	id: '22A39DC83079432BB23403B040ECA6C4',
	width: 640,
	height: 480,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"jsgame/images_pc/GameBackScreen.png?1588779899586", id:"GameBackScreen"},
		{src:"jsgame/images_pc/HelpButton_PC.png?1588779899586", id:"HelpButton_PC"},
		{src:"jsgame/images_pc/HelpButton_PC_Push.png?1588779899586", id:"HelpButton_PC_Push"},
		{src:"jsgame/images_pc/helpsheet2.png?1588779899586", id:"helpsheet2"},
		{src:"jsgame/images_pc/LineButton_PC.png?1588779899586", id:"LineButton_PC"},
		{src:"jsgame/images_pc/LineButton_PC_Push.png?1588779899586", id:"LineButton_PC_Push"},
		{src:"jsgame/images_pc/nannidoupsheet.png?1588779899586", id:"nannidoupsheet"},
		{src:"jsgame/images_pc/owan.png?1588779899586", id:"owan"},
		{src:"jsgame/images_pc/poster.png?1588779899586", id:"poster"},
		{src:"jsgame/images_pc/RestartButton_PC.png?1588779899586", id:"RestartButton_PC"},
		{src:"jsgame/images_pc/RestartButton_PC_Push.png?1588779899586", id:"RestartButton_PC_Push"},
		{src:"jsgame/images_pc/ResultScene.png?1588779899586", id:"ResultScene"},
		{src:"jsgame/images_pc/ResultSheet.png?1588779899586", id:"ResultSheet"},
		{src:"jsgame/images_pc/shape.png?1588779899586", id:"shape"},
		{src:"jsgame/images_pc/StartButton_PC.png?1588779899586", id:"StartButton_PC"},
		{src:"jsgame/images_pc/StartButton_PC_Push.png?1588779899586", id:"StartButton_PC_Push"},
		{src:"jsgame/images_pc/TopScene.png?1588779899586", id:"TopScene"},
		{src:"jsgame/images_pc/TwitterButton_PC.png?1588779899586", id:"TwitterButton_PC"},
		{src:"jsgame/images_pc/TwitterButton_PC_Push.png?1588779899586", id:"TwitterButton_PC_Push"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['22A39DC83079432BB23403B040ECA6C4'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;