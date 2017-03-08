
function getData() {
  const vs97 = new Version('Visual Studio 97', 'Boston', 5.0, 'February 1997');
  const vs6 = new Version('Visual Studio 6.0', 'Aspen', 6.0, 'June 1998');

  const vs2002 = new Version('Visual Studio .NET (2002)', 'Rainier', 7.0, new Date(2002, 1, 13));
  vs2002.addSupportedFramework('.NET Framework', 1.0);

  const vs2003 = new Version('Visual Studio .NET 2003', 'Everett', 7.1, new Date(2003, 3, 24));
  vs2003.addSupportedFramework('.NET Framework', 1.1);

  const vs2005 = new Version('Visual Studio 2005', 'Whidbey', 8.0, new Date(2005, 10, 7));
  vs2005.addSupportedFramework('.NET Framework', 2.0);
  vs2005.addSupportedFramework('.NET Framework', 3.0);

  const vs2008 = new Version('Visual Studio 2008', 'Orcas', 9.0, new Date(2007, 10, 19));
  vs2008.addSupportedFramework('.NET Framework', 2.0);
  vs2008.addSupportedFramework('.NET Framework', 3.0);
  vs2008.addSupportedFramework('.NET Framework', 3.5);

  const vs2010 = new Version('Visual Studio 2010', 'Dev10/Rosario', 10.0, new Date(2010, 3, 12));
  vs2010.addSupportedFramework('.NET Framework', 2.0);
  vs2010.addSupportedFramework('.NET Framework', 3.0);
  vs2010.addSupportedFramework('.NET Framework', 3.5);
  vs2010.addSupportedFramework('.NET Framework', 4.0);

  const vs2012 = new Version('Visual Studio 2012', 'Dev11', 11.0, new Date(2012, 8, 12));
  vs2012.addSupportedFramework('.NET Framework', 2.0);
  vs2012.addSupportedFramework('.NET Framework', 3.0);
  vs2012.addSupportedFramework('.NET Framework', 3.5);
  vs2012.addSupportedFramework('.NET Framework', 4.0);
  vs2012.addSupportedFramework('.NET Framework', 4.5);

  const vs2013 = new Version('Visual Studio 2013', 'Dev12', 12.0, new Date(2013, 9, 17));
  vs2013.addSupportedFramework('.NET Framework', 2.0);
  vs2013.addSupportedFramework('.NET Framework', 3.0);
  vs2013.addSupportedFramework('.NET Framework', 3.5);
  vs2013.addSupportedFramework('.NET Framework', 4.0);
  vs2013.addSupportedFramework('.NET Framework', 4.5);

  const vs2015 = new Version('Visual Studio 2015', 'Dev14', 14.0, new Date(2015, 6, 20));
  vs2015.addSupportedFramework('.NET Framework', 2.0);
  vs2015.addSupportedFramework('.NET Framework', 3.0);
  vs2015.addSupportedFramework('.NET Framework', 3.5);
  vs2015.addSupportedFramework('.NET Framework', 4.0);
  vs2015.addSupportedFramework('.NET Framework', 4.5);
  vs2015.addSupportedFramework('.NET Framework', 4.6);

  const vs2017 = new Version('Visual Studio 2017', 'Dev15', 15.0, new Date(2017, 2, 7));
  vs2017.addSupportedFramework('.NET Framework', 2.0);
  vs2017.addSupportedFramework('.NET Framework', 3.0);
  vs2017.addSupportedFramework('.NET Framework', 3.5);
  vs2017.addSupportedFramework('.NET Framework', 4.0);
  vs2017.addSupportedFramework('.NET Framework', 4.5);
  vs2017.addSupportedFramework('.NET Framework', 4.6);
  vs2017.addSupportedFramework('.NET Core', 1.0);
  vs2017.addSupportedFramework('.NET Core', 1.1);

  return [
    vs97,
    vs6,
    vs2002,
    vs2003,
    vs2005,
    vs2008,
    vs2010,
    vs2012,
    vs2013,
    vs2015,
    vs2017
  ];
}
