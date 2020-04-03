$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 3,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter \u003cusername\u003e into username text fields on home screen",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter \u003cpassword\u003e into password text fields on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that I am in invalid login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 16,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;1"
    },
    {
      "cells": [
        "dilek@sample.com",
        "test123"
      ],
      "line": 17,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;2"
    },
    {
      "cells": [
        "ayse@sample.com",
        "abc@123"
      ],
      "line": 18,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;3"
    },
    {
      "cells": [
        "nese@smaple.com",
        "456@wer"
      ],
      "line": 19,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7269592843,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSD.iAmOnHomePage()"
});
formatter.result({
  "duration": 956439396,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter dilek@sample.com into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter test123 into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that I am in invalid login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "dilek@sample.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 30
    }
  ],
  "location": "LoginPageSD.enterDataUserAndPassField(String,String)"
});
formatter.result({
  "duration": 395506208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "LoginPageSD.enterDataUserAndPassField(String,String)"
});
formatter.result({
  "duration": 113611194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 11
    }
  ],
  "location": "LoginPageSD.clickonButton(String)"
});
formatter.result({
  "duration": 100118875,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 17828095919,
  "status": "passed"
});
formatter.after({
  "duration": 151275207,
  "status": "passed"
});
formatter.before({
  "duration": 4114886612,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSD.iAmOnHomePage()"
});
formatter.result({
  "duration": 14428795,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter ayse@sample.com into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter abc@123 into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that I am in invalid login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ayse@sample.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 29
    }
  ],
  "location": "LoginPageSD.enterDataUserAndPassField(String,String)"
});
formatter.result({
  "duration": 542966241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@123",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "LoginPageSD.enterDataUserAndPassField(String,String)"
});
formatter.result({
  "duration": 304664181,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 11
    }
  ],
  "location": "LoginPageSD.clickonButton(String)"
});
formatter.result({
  "duration": 105524888,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 29152465854,
  "status": "passed"
});
formatter.after({
  "duration": 145884830,
  "status": "passed"
});
formatter.before({
  "duration": 4502716178,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSD.iAmOnHomePage()"
});
formatter.result({
  "duration": 9851702,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter nese@smaple.com into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter 456@wer into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that I am in invalid login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "nese@smaple.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 29
    }
  ],
  "location": "LoginPageSD.enterDataUserAndPassField(String,String)"
});
formatter.result({
  "duration": 349814293,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "456@wer",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "LoginPageSD.enterDataUserAndPassField(String,String)"
});
formatter.result({
  "duration": 117206998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 11
    }
  ],
  "location": "LoginPageSD.clickonButton(String)"
});
formatter.result({
  "duration": 93636139,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 14866170803,
  "status": "passed"
});
formatter.after({
  "duration": 141799416,
  "status": "passed"
});
});