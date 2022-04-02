import 'package:flutter/material.dart';
import 'package:tourista_b2b/models/lastannuncementModel.dart';
import 'package:tourista_b2b/services/services.dart';

class homePage extends StatefulWidget {
  const homePage({Key? key}) : super(key: key);

  @override
  _homePageState createState() => _homePageState();
}

class _homePageState extends State<homePage> {
  void initState() {
    super.initState();
    _requestInit();
  }

  String lastAnnounce = "";

  _requestInit() async {
    var temp = await Services().getlastannouncement();
    setState(() {
      //aboutCard = temp;
      lastAnnounce = temp.message;
    });
  }

  LastAnnouncmenetModel() {}

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      //crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Align(
          alignment: Alignment.center,
          child: Container(
            width: 150.0,
            height: 150.0,
            // alignment: Alignment.center,
            decoration: new BoxDecoration(
              image: DecorationImage(
                  // alignment: Alignment.center,

                  image: AssetImage('assets/preview.png'),
                  fit: BoxFit.fill),
            ),
          ),
        ),
        Card(
          elevation: 2.0,
          child: ListTile(
              title: Text("Last Announcment"), subtitle: Text(lastAnnounce)),
        ),
        // Card(
        //   elevation: 2.0,
        //   child: ListTile(
        //     title: Text("Last Announcment"),
        //     subtitle: Text(
        //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus tincidunt bibendum. Maecenas eu viverra orci. Duis diam leo, porta at justo vitae, euismod aliquam nulla."),
        //   ),
        // ),
        Card(
          child: ListTile(
            title: Text("Current Event"),
            subtitle: Text(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus tincidunt bibendum. Maecenas eu viverra orci. Duis diam leo, porta at justo vitae, euismod aliquam nulla."),
          ),
        ),
        Card(
          child: ListTile(
            title: Text("Itenary Plan"),
            subtitle: Text(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus tincidunt bibendum. Maecenas eu viverra orci. Duis diam leo, porta at justo vitae, euismod aliquam nulla."),
          ),
        ),
      ],
    );
  }
}
