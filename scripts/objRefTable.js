const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.SVGPicture,
		C3.Behaviors.DragnDrop,
		C3.Behaviors.Tween,
		C3.Plugins.Text,
		C3.Plugins.Sprite,
		C3.Plugins.NinePatch,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Plugins.Button,
		C3.Plugins.Browser,
		C3.Plugins.Mouse,
		C3.Behaviors.EightDir,
		C3.Behaviors.MoveTo,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Behaviors.DragnDrop.Cnds.OnDrop,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Acts.SetLayerEffectParam,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.System.Acts.SetLayerInteractive,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.Browser.Acts.RequestFullScreen,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.SVGPicture.Cnds.PickParent,
		C3.Plugins.SVGPicture.Acts.Destroy,
		C3.Plugins.SVGPicture.Cnds.OnCreated,
		C3.Plugins.SVGPicture.Acts.SetImageByName,
		C3.Plugins.System.Cnds.PickAll,
		C3.Plugins.SVGPicture.Acts.SetY,
		C3.Plugins.SVGPicture.Exps.Y,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.SVGPicture.Exps.X,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.SVGPicture.Exps.Height,
		C3.Plugins.SVGPicture.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.SVGPicture.Acts.ToggleBoolInstanceVar,
		C3.Plugins.SVGPicture.Exps.Width,
		C3.Behaviors.MoveTo.Cnds.OnArrived,
		C3.Behaviors.MoveTo.Acts.MoveToPosition,
		C3.Behaviors.MoveTo.Cnds.OnHitSolid,
		C3.Plugins.Sprite.Acts.SetWidth,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Sprite.Acts.SetHeight,
		C3.Plugins.Sprite.Exps.Height
	];
};
self.C3_JsPropNameTable = [
	{DragDrop: 0},
	{Tween: 0},
	{IconDocumentImage: 0},
	{IconDocumentText: 0},
	{IconDocumentDragArea: 0},
	{PackingGameClickArea: 0},
	{PackingGameClickArea2: 0},
	{BubbleGuyClickArea: 0},
	{BubbleGuyIconImage: 0},
	{PackingGameClickArea3: 0},
	{PackingGameClickArea4: 0},
	{IconTrashText: 0},
	{IconTrashImage: 0},
	{PackagingGameIconImage: 0},
	{PackagingGameIconText: 0},
	{BubbleGuyGameIconText: 0},
	{PackagingGameIconImage2: 0},
	{EmailBox: 0},
	{EmailMessage: 0},
	{EmailTitle: 0},
	{EmailWindow: 0},
	{closeButton: 0},
	{Popup1: 0},
	{packingbubblepopped: 0},
	{hasSpawned: 0},
	{originalX: 0},
	{hasPopped: 0},
	{packingbubbleunpopped: 0},
	{Platform: 0},
	{ScrollTo: 0},
	{Player: 0},
	{Solid: 0},
	{TiledBackground: 0},
	{Tomato: 0},
	{Keyboard: 0},
	{SVGPicture: 0},
	{taskbar: 0},
	{taskbar2: 0},
	{DesktopIcon: 0},
	{StartButton: 0},
	{Browser: 0},
	{knifesvgrepocom: 0},
	{honeysvgrepocom: 0},
	{IconText: 0},
	{hatchefsvgrepocom: 0},
	{Mouse: 0},
	{packingwindow: 0},
	{bubbleGuyWindow: 0},
	{bubbleguycircle: 0},
	{"8Direction": 0},
	{bubbleguybody: 0},
	{MoveTo: 0},
	{bubbleguybad: 0},
	{bubbleguygood: 0},
	{BubbleGuyLimb: 0},
	{CurrentGame: 0},
	{EmailLayerSwirl: 0}
];

self.InstanceType = {
	IconDocumentImage: class extends self.ISVGPictureInstance {},
	IconDocumentText: class extends self.ITextInstance {},
	IconDocumentDragArea: class extends self.ISpriteInstance {},
	PackingGameClickArea: class extends self.ISpriteInstance {},
	PackingGameClickArea2: class extends self.ISpriteInstance {},
	BubbleGuyClickArea: class extends self.ISpriteInstance {},
	BubbleGuyIconImage: class extends self.ISpriteInstance {},
	PackingGameClickArea3: class extends self.ISpriteInstance {},
	PackingGameClickArea4: class extends self.ISpriteInstance {},
	IconTrashText: class extends self.ITextInstance {},
	IconTrashImage: class extends self.ISVGPictureInstance {},
	PackagingGameIconImage: class extends self.ISVGPictureInstance {},
	PackagingGameIconText: class extends self.ITextInstance {},
	BubbleGuyGameIconText: class extends self.ITextInstance {},
	PackagingGameIconImage2: class extends self.ISVGPictureInstance {},
	EmailBox: class extends self.ISpriteInstance {},
	EmailMessage: class extends self.ITextInstance {},
	EmailTitle: class extends self.ITextInstance {},
	EmailWindow: class extends self.IWorldInstance {},
	closeButton: class extends self.ISVGPictureInstance {},
	Popup1: class extends self.ISVGPictureInstance {},
	packingbubblepopped: class extends self.ISVGPictureInstance {},
	packingbubbleunpopped: class extends self.ISVGPictureInstance {},
	Player: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Tomato: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	SVGPicture: class extends self.ISVGPictureInstance {},
	taskbar: class extends self.ISpriteInstance {},
	taskbar2: class extends self.ISpriteInstance {},
	DesktopIcon: class extends self.ISVGPictureInstance {},
	StartButton: class extends self.IButtonInstance {},
	Browser: class extends self.IInstance {},
	knifesvgrepocom: class extends self.ISVGPictureInstance {},
	honeysvgrepocom: class extends self.ISVGPictureInstance {},
	IconText: class extends self.ITextInstance {},
	hatchefsvgrepocom: class extends self.ISVGPictureInstance {},
	Mouse: class extends self.IInstance {},
	packingwindow: class extends self.ISVGPictureInstance {},
	bubbleGuyWindow: class extends self.ISVGPictureInstance {},
	bubbleguycircle: class extends self.ISVGPictureInstance {},
	bubbleguybody: class extends self.ISVGPictureInstance {},
	bubbleguybad: class extends self.ISVGPictureInstance {},
	bubbleguygood: class extends self.ISVGPictureInstance {},
	BubbleGuyLimb: class extends self.ISpriteInstance {}
}