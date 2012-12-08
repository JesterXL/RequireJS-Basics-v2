(function()
{
define(["jquery"], function($)
{
	var PersonList = function()
	{
		return {
			
			el: null,
			personArray: null,

			setElement: function(el)
			{
				this.el = el;
			},

			render: function()
			{
				if(this.el == null)
				{
					logger.error("PersonList::render, Our html element is null.");
					return;
				}

				if(this.personArray == null)
				{
					logger.error("PersonList::render, Out personArray is empty, thus we cannot draw.");
					return;
				}

				var listHTML = "";
				listHTML += "<ol>";
				var len = this.personArray.length;
				for(var index = 0; index < len; index++)
				{
					var personVO = this.personArray[index];
					listHTML += "<li>" + personVO.getPrettyName() + "</li>\n";
				}
				listHTML += "</ol>";
				$(this.el).html(listHTML);
			}
		};
	};
	return PersonList;
});	
}
)();