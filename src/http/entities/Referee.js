import { BASE_PATH } from "../../constants";
import Entity from "./Entity";

export class Referee extends Entity {
  constructor() {
    super();
  }

  async getReferee(id) {
    return await this.handlePost(`${BASE_PATH}/a/referees/show/${id}`);
  }

  async getAllReferees() {
    return await this.handlePost(`${BASE_PATH}/a/referees`);
  }

  async storeReferee(
    name,
    family,
    fatherName,
    birthDate,
    placeOfBirth,
    identityNo,
    nationalCode,
    mobile,
    tel,
    fieldOfStudy,
    email,
    homeAddress,
    workAddress,
    sportsField,
    experience,
    latestValidRefereesCertificate,
    lastYearObtainingRefereesDegree,
    records,
    instructorsRefereesCourses,
    placeObtainingRefereesCertificates,
    refereesRecords,
    honors,
    executiveProfessionalRecords,
    workshopsAsParticipant,
    educationalWorkshopsAsTeacher,
    RefereesLevels
  ) {
    return await this.handlePost(`${BASE_PATH}/a/referees/store`, {
      name,
      family,
      father_name: fatherName,
      birthDate,
      place_birth: placeOfBirth,
      identityNo,
      national_code: nationalCode,
      mobile,
      tel,
      field_study: fieldOfStudy,
      email,
      home_address: homeAddress,
      work_address: workAddress,
      sports_field: sportsField,
      experience,
      latest_valid_referees_certificate: latestValidRefereesCertificate,
      last_year_obtaining_referees_degree: lastYearObtainingRefereesDegree,
      records,
      instructors_Referees_courses: instructorsRefereesCourses,
      place_obtaining_referees_certificates: placeObtainingRefereesCertificates,
      Referees_records: refereesRecords,
      honors,
      executive_professional_records: executiveProfessionalRecords,
      workshops_as_participant: workshopsAsParticipant,
      educational_workshops_as_aeacher: educationalWorkshopsAsTeacher,
      Referees_levels: RefereesLevels,
    });
  }

  async deleteReferee(id) {
    return await this.handlePost(`${BASE_PATH}/a/referees/delete/${id}`);
  }
}
