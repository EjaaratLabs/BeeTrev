import 'dart:convert';

List<EventsModel> domainsModelFromMap(String str) =>
    List<EventsModel>.from(json.decode(str).map((x) => EventsModel.fromMap(x)));

String domainsModelToMap(List<EventsModel> data) =>
    json.encode(List<dynamic>.from(data.map((x) => x.toMap())));

class EventsModel {
  EventsModel({
    required this.Eventsname,
    required this.guestid,
  });

  String Eventsname;
  String guestid;

  factory EventsModel.fromMap(Map<String, dynamic> json) => EventsModel(
        Eventsname: json["events"],
        guestid: json["guestid"],
      );

  Map<String, dynamic> toMap() => {
        "Eventsname": Eventsname,
        "guestid": guestid,
      };
}
