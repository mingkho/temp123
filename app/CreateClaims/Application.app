{
	"_Name": "CreateClaims",
	"Version": "/CreateClaims/Globals/AppDefinition_Version.global",
	"MainPage": "/CreateClaims/Pages/Claims/Claims_List.page",
	"OnLaunch": [
		"/CreateClaims/Actions/Service/InitializeOnline.action"
	],
	"OnWillUpdate": "/CreateClaims/Rules/OnWillUpdate.js",
	"OnDidUpdate": "/CreateClaims/Actions/Service/InitializeOnline.action",
	"Styles": "/CreateClaims/Styles/Styles.less",
	"Localization": "/CreateClaims/i18n/i18n.properties",
	"_SchemaVersion": "2208"
}