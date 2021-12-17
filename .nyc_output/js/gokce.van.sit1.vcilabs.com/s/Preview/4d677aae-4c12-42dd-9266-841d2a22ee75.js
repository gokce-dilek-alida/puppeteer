
			(function() {				
				require(['plugins/ExtendedQuestions/OpenEndNoValidationPlugin/Scripts/main','messageStep','pluginRegistry','scriptRegistry','desktop/main'], function(plugins_ExtendedQuestions_OpenEndNoValidationPlugin_Scripts_main,messageStep,pluginRegistry,scriptRegistry,main) {
					pluginRegistry.initialize([{ plugin : plugins_ExtendedQuestions_OpenEndNoValidationPlugin_Scripts_main, localizations : {"InfoText":"Enter {0} - {1} characters.","MinimumLengthText":"Minimum {0} characters.","NoValidationPlaceholder":"Your response","TextFieldText":"Text Field"} },{ plugin : messageStep, localizations : null }], []);
					scriptRegistry.initialize([]);
					main.run();
				});
			})();
			