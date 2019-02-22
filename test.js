QUnit.test( "TestVolume", function( assert ) 
{
            var res = volume(1,2,3);
            assert.equal( res, "6", "volume of cuboid with these inputs will be 3" );
});
         
         
QUnit.test( "TestVolume", function( assert ) 
{
            var result = volume(6,6,1);
            assert.equal( result, "36", "volume of cuboid with these inputs will be 18" );
});

QUnit.test( "TestVolume", function( assert ) 
{
            var res = volume(4,3,2);
            assert.equal( res, "24", "volume of cuboid with these inputs will be 3" );
});

QUnit.test( "TestVolume", function( assert ) 
{
            var res = volume(2,2,2);
            assert.equal( res, "8", "volume of cuboid with these inputs will be 3" );
});

QUnit.test( "TestVolume", function( assert ) 
{
            var res = volume(3,1,6);
            assert.equal( res, "18", "volume of cuboid with these inputs will be 3" );
});
