try {
	$ADP.Player.adpTranslation = {
		/*
		 * Important: Texts should be entity-encoded
		 * 
		 * Example
		 */
		 
/*
		'fr' : {
			'header': 'Headertext in French',
			'footer': 'Footertext in French'
		}
*/
	}
	$ADP.Util.log('Loaded Adplayer translation successfully.');
} catch (e) {
	$ADP.Util.log('Failed to add  Aplayer translation: ' + e.message);
}