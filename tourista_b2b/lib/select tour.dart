import 'package:flutter/material.dart';
import 'package:tourista_b2b/Home_page.dart';
import 'package:tourista_b2b/bottom_nav.dart';

class selectTour extends StatefulWidget {
  const selectTour({Key? key}) : super(key: key);

  @override
  _selectTourState createState() => _selectTourState();
}

class _selectTourState extends State<selectTour> {
  List aboutCard = [
    about_card(
        title: "HUNZA",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus tincidunt bibendum. Maecenas eu viverra orci. Duis diam leo, porta at justo vitae, euismod aliquam nulla."),
    about_card(
        title: "SKARDU",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus tincidunt bibendum. Maecenas eu viverra orci. Duis diam leo, porta at justo vitae, euismod aliquam nulla."),
    about_card(title: "HUNZA", description: "Pakistan"),
    about_card(title: "SKARDU", description: "03362909604"),
    about_card(title: "HUNZA", description: "Male"),
    about_card(title: "SKARDU", description: "18-July-2000"),
    about_card(title: "HUNZA", description: "Islam"),
    about_card(title: "SKARDU", description: "single"),
    about_card(title: "NARAAN", description: "Islam"),
    about_card(title: "QUETTA", description: "Islam"),
    about_card(title: "GILGIT", description: "Islam"),
  ];
  var _dropDownValue;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        title: Text("Select Tour"),
        backgroundColor: Color(0xffa014eb),
      ),
      body: SingleChildScrollView(
        child: Column(
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
            ListView.builder(
                scrollDirection: Axis.vertical,
                shrinkWrap: true,
                physics: ScrollPhysics(),
                itemCount: aboutCard.length,
                itemBuilder: (context, index) {
                  return Card(
                    child: new InkWell(
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(builder: (context) => btm_nav()),
                        );
                      },
                      child: ListTile(
                        title: Text(aboutCard[index].title),
                        subtitle: Text(
                          aboutCard[index].description,
                          style: TextStyle(fontSize: 12),
                        ),
                      ),
                    ),
                  );
                }),
          ],
        ),
      ),
    );
  }
}

class about_card {
  String title;
  String description;

  about_card({required this.title, required this.description});
}
