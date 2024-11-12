# How to run
1. install node 18.20.0
2. npm i --force
3. npm start

4. Replace following method in Spotfire_SDK\Examples\Extensions\SpotfireDeveloper.CustomVisualsExample\CustomDonutChart\CustomDonutChartView.cs file
```
        protected override HttpContent GetResourceCore(string path, NameValueCollection query, CustomDonutChart snapshotNode)
        {
            if (string.IsNullOrEmpty(path))
            {
                //path = "CustomDonutChart.html";
                path = "http://localhost:3000/index.html";
            }

            //var bytes = GetEmbeddedResource("SpotfireDeveloper.CustomVisualsExample.webroot." + path);
            //var mimeType = ResolveContentType("SpotfireDeveloper.CustomVisualsExample.webroot." + path);
            var http = new WebClient();
            var bytes = http.DownloadData(new Uri(path));
            var mimeType = ResolveContentType(path);

            // To get quick turn around time when developing your custom visual view you can for instance read the resource contents 
            // directly for the disk folder where you keep your source code. You can then edit the resource (html, .js, etc.) and then
            // press Control+Alt+Shift+F5 in spotfire to reload the UI and make your changes take effect.
            ////if (Debugger.IsAttached)
            ////{
            ////    var pathOnDisk = @"C:\Source\Spotfire\SpotfireDeveloper.CustomVisualsExample\webroot\" + path;
            ////    bytes = File.ReadAllBytes(pathOnDisk);
            ////}

            return new HttpContent(mimeType, bytes);
        }
```
# Record videos

## It works OK with Spotfire 14.0.4-HF-16
[Check out this file](https://github.com/qucc/ReactSelectDemo/blob/main/hotfix_16.mp4)

## It does't work with Spotfire 14.0.4-HF-17
[Check out this file](https://github.com/qucc/ReactSelectDemo/blob/main/hotfix_17.mp4)
