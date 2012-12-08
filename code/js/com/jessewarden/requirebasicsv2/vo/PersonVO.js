(function()
{
define([], function()
{
	var PersonVO = function(first, last)
	{
		return {
			firstName: first,
			lastName: last,

			getPrettyName: function()
			{
				return this.lastName + ", " + this.firstName;
			}
		};
	};
	return PersonVO;
});	
}
)();