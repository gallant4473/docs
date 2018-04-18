export const checkboxConst = [
  {
    prop: 'id',
    desc: 'Required(string), to make the label clickable for checkbox input'
  }, {
    prop: 'options',
    desc: 'Required(Array), options to display'
  }, {
    prop: 'active',
    desc: 'Required(Array), options in the array are checked'
  }, {
    prop: 'onChange',
    desc: 'Required(function), function gets called when the options are checked or unchecked'
  }, {
    prop: 'inline',
    desc: 'Optional(boolean), to display checkbox inline'
  }
]

export const radioConst = [
  {
    prop: 'id',
    desc: 'Required(string), to make the label clickable for radio input'
  }, {
    prop: 'options',
    desc: 'Required(Array), options to display'
  }, {
    prop: 'active',
    desc: 'Required(null or one of the option from options)'
  }, {
    prop: 'onChange',
    desc: 'Required(function), function gets called when the option is clicked'
  }, {
    prop: 'inline',
    desc: 'Optional(boolean), to display radio buttons inline'
  }
]

export const modalConst = [
  {
    prop: 'open',
    desc: 'Required(bool), to make the Modal close and open'
  }, {
    prop: 'onClose',
    desc: 'Required(function), function gets called when clicked on cross icon or clicked outside the modal to set open state to false'
  }, {
    prop: 'size',
    desc: 'Optional(small, medium, large), to set width of modal'
  }, {
    prop: 'dialog',
    desc: 'Optional(bool), by default false and modal will open at 30% from top. If true, modal will open at center of screen'
  }
]

export const dropdownConst = [
  {
    prop: 'options',
    desc: 'Required(Array), options to display'
  }, {
    prop: 'active',
    desc: 'Required(one of the option or null), option will be selected'
  }, {
    prop: 'onChange',
    desc: 'Required(function), function gets called when the option is clicked'
  }, {
    prop: 'title',
    desc: 'Optional(string), to display in dropdown if nothing is selected'
  }, {
    prop: 'open',
    desc: 'Optional(boolean), incase if you want the dropdown to be open at the beginning'
  }, {
    prop: 'placeholder',
    desc: 'Optional(string), incase of search'
  }, {
    prop: 'onSearch',
    desc: 'Optional(function), incase if you want search, function return input typed'
  }, {
    prop: 'searchOptions',
    desc: 'Optional(Array), pass the search options you get from API or options you get from filter function. Options gets displayed for search input inputted.'
  }, {
    prop: 'minLength',
    desc: 'Optional(Positive number), min length of input before onSearch gets triggered'
  }, {
    prop: 'noDataText',
    desc: 'Optional(string), To display message if the options is empty and onSearch is not used'
  }, {
    prop: 'noSearchDataText',
    desc: 'Optional(string), To display message if searchOptions is empty after searching'
  }, {
    prop: 'noDataSearchText',
    desc: 'Optional(string), To display message if no Options and onSearch is enabled'
  }
]

export const multiselectConst = [
  {
    prop: 'id',
    desc: 'Required(string), to make the label clickable for checkbox input'
  }, {
    prop: 'options',
    desc: 'Required(Array), options to display'
  }, {
    prop: 'active',
    desc: 'Required(Array), options will be selected'
  }, {
    prop: 'onChange',
    desc: 'Required(function), function gets called when the option is checked or unchecked'
  }, {
    prop: 'title',
    desc: 'Optional(string), to display in dropdown if nothing is selected'
  }, {
    prop: 'open',
    desc: 'Optional(boolean), incase if you want the dropdown to be open at the beginning'
  }, {
    prop: 'placeholder',
    desc: 'Optional(string), incase of search'
  }, {
    prop: 'onSearch',
    desc: 'Optional(function), incase if you want search, function return input typed'
  }, {
    prop: 'searchOptions',
    desc: 'Optional(Array), pass the search options you get from API or options you get from filter function. Options gets displayed for search input inputted.'
  }, {
    prop: 'minLength',
    desc: 'Optional(Positive number), min length of input before onSearch gets triggered'
  }, {
    prop: 'noDataText',
    desc: 'Optional(string), To display message if the options is empty and onSearch is not used'
  }, {
    prop: 'noSearchDataText',
    desc: 'Optional(string), To display message if searchOptions is empty after searching'
  }, {
    prop: 'noDataSearchText',
    desc: 'Optional(string), To display message if no Options and onSearch is enabled'
  }
]

export const lazybodyConst = [
  {
    prop: 'total',
    desc: 'Required(number), total count of the list'
  }, {
    prop: 'currentTotal',
    desc: 'Required(number), current Total count of the list (data.length)'
  }, {
    prop: 'loadMoreRows',
    desc: 'Required(func), gets triggered when scroll hits the bottom and currentTotal < Total'
  }, {
    prop: 'loader',
    desc: 'Optional(loader component), to display loader while you fetch data ie. loader={<Loader />}'
  }, {
    prop: 'footerHeight',
    desc: 'Optional(number) height of footer or all the components that exists below list component if any'
  }
]
