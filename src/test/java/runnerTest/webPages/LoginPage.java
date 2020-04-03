package runnerTest.webPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LoginPage extends ElementUtil {

    WebDriver driver;

    private By emailTextField = By.id("email");
    private By passwordTextField = By.id("pass");
    private By loginButton = By.id("loginbutton");
    private By errorMessage = By.xpath("//span[contains(text(), 'Log Into Facebook')]");


    public void clickOnLoginButton() {

        clickOn(loginButton);
    }

    public void enterEmail(String enterEmail) {

        sendValue(emailTextField, enterEmail);
    }

    public void enterPassword(String enterPassword) {

        sendValue(passwordTextField, enterPassword);
    }

    public String getTextElement(){

        return getTextFromElement(errorMessage);
    }

}
