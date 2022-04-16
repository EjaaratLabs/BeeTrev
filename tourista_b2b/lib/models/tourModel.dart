import 'dart:convert';

List<TourModel> domainsModelFromMap(String str) =>
    List<TourModel>.from(json.decode(str).map((x) => TourModel.fromMap(x)));

String domainsModelToMap(List<TourModel> data) =>
    json.encode(List<dynamic>.from(data.map((x) => x.toMap())));

class TourModel {
  TourModel({
    required this.id,
    required this.name,
  });

  int id;
  String name;

  factory TourModel.fromMap(Map<String, dynamic> json) => TourModel(
        id: json["id"],
        name: json["name"],
      );

  Map<String, dynamic> toMap() => {
        "id": id,
        "name": name,
      };
}
