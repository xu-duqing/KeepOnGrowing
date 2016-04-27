package com.keepongrowing;

import android.app.Application;

import com.facebook.stetho.Stetho;
import com.squareup.okhttp.OkHttpClient;

/**
 * Created by Guang on 16/4/27.
 */
public class MyApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();

        Stetho.initialize(
                Stetho.newInitializerBuilder(this)
                        .enableDumpapp(
                                Stetho.defaultDumperPluginsProvider(this))
                        .enableWebKitInspector(
                                Stetho.defaultInspectorModulesProvider(this))
                        .build());



        OkHttpClient client = new OkHttpClient();
    }
}
