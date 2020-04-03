package stepdefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import runnerTest.webPages.LoginPage;
import utils.BasePage;

public class LoginPageSD {


    private LoginPage loginPage = new LoginPage();

    @Given("^I am on home page$")
    public void iAmOnHomePage(){
        Assert.assertEquals(BasePage.get().getCurrentUrl(), "https://www.facebook.com/");
    }

    @When("^I enter (.+) into (username|password) text fields on home screen$")
    public void enterDataUserAndPassField(String anyText, String textFields){

        switch (textFields){
            case "username":
                loginPage.enterEmail(anyText);
                break;
            case "password":{
                loginPage.enterPassword(anyText);
                break;
            }
        }

    }
    @And("^I click on (login|create account) button on home screen$")
    public void clickonButton(String button){

        switch (button){
            case "login":
                loginPage.clickOnLoginButton();
                break;
            case "create account":
                //implement create account object here
                break;
        }

    }

    @Then("^I verify that I am in invalid login page$")
    public void verifyInvalidLogin(){

        Assert.assertEquals(loginPage.getTextElement(), "Log Into Facebook");
    }
}

