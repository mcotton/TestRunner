###JavaScript TestRunner###


This is a simple JavaScript test framework so I can exercise my API.  Right now the API is private so this repo is private also.  Hopefully that will change.

#####How it Works#####
=================

Make a new testrunner

    var tr = new TestRunner()

and a new test

    tests['hello'] = new Test(function() { alert('hello') })

add the test to the testrunner

    tr.add(tests['hello'])
    
and finally

    tr.run()

#####Example#####
=================
Put this file on your server and include the script into your code

    <script src="/static/js/testrunner.js"></script>
    
 After you include the script you are ready to add some tests
      
        // Make all ajax calls syncronous
        $.ajaxSetup({
            async: false
        }) 
    
        var tests = []
    
    
        tests['login'] = new Test(
        function() {
            $.post('/qliqserver/login', {'username':<username>, 'password':<password>},
            function(data) {
                appendRow('Login Test', data.success, 'Returns user id: ' + data.data.user.id );
            })
        })

        tests['inbox_messages'] = new Test( 
        function() {
            $.get('/qliqserver/inbox', 
            function(data) {
                appendRow('Inbox Messages', data.success, 'Returns: ' + data.data );
            })
        })

        tests['logout'] = new Test( 
        function() {
            $.get('/qliqserver/login', 
                function(data) {
                    appendRow('Logout Test', data.success, 'Returns nothing');
                })
        })
        
        
        function appendRow(row_name, status, return_val) {
            $('tbody').append('<tr><td>' + row_name + '</td><td>' + status + '</td><td>' + return_val + '</td></tr>')
        }
      
    // Botton to get the party started
        $('#clicky').click(function() {
                var tr = new TestRunner()

                // loop through test cases and add them to the TestRunner
                for (t in tests) {
                        tr.add(tests[t]);
                }       

                tr.run();               
        })  
            

Add in some HTML and you're set

    <table>
        <thead>
            <tr>
                <td>Test Desc.</td>
                <td>Success</td>
                <td>Response</td>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    <hr>
    <button id='clicky'>clicky</button>
    
Maybe a little CSS

    <style>
        .main {
            width: 800px;
            margin: 0 auto;
            padding-top: 50px;
        }
        
        .main table {
            width: 100%;
        }
        
        .main table tbody tr {
            padding: 2px;
            border-top: 2px;
        }
    </style>
    
    
    