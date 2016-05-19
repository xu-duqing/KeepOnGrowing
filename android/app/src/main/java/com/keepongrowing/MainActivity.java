package com.keepongrowing;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.microsoft.codepush.react.CodePush;
import com.github.xinthink.rnmk.ReactMaterialKitPackage;

import java.util.Arrays;
import java.util.List;

import javax.annotation.Nullable;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "KeepOnGrowing";
    }

    /**
     * Returns whether dev mode should be enabled.
     * This enables e.g. the dev menu.
     */
    @Override
    protected boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

    /**
     * A list of packages used by the app. If the app uses additional views
     * or modules besides the default ones, add more packages here.
     */
    @Override
    protected List<ReactPackage> getPackages() {

        return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new CodePush("g0-MT7iuWOLkjS_Kz2hPmTG7pTvQNJKWkMWZW",this,this.getUseDeveloperSupport()),
            new ReactMaterialKitPackage()
        );
    }

    @Nullable
    @Override
    protected String getJSBundleFile() {
        return CodePush.getBundleUrl();
    }
}
