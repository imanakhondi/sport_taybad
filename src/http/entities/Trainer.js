import { BASE_PATH } from "../../constants";
import Entity from "./Entity";

export class Trainer extends Entity {
  constructor() {
    super();
  }

  async getTrainer(id) {
    return await this.handlePost(`${BASE_PATH}/a/trainers/show/${id}`);
  }

  async getAllTrainers() {
    return await this.handlePost(`${BASE_PATH}/a/trainers`);
  }

  async storeTrainer(
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
    latestValidCoachingCertificate,
    lastYearObtainingCoachingDegree,
    records,
    instructorsCoachingCourses,
    placeObtainingCoachingCertificates,
    coachingRecords,
    honors,
    executiveProfessionalRecords,
    workshopsAsParticipant,
    educationalWorkshopsAsTeacher,
    coachingLevels
  ) {
    return await this.handlePost(`${BASE_PATH}/a/trainers/store`, {
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
      latest_valid_coaching_certificate:latestValidCoachingCertificate,
      last_year_obtaining_coaching_degree:lastYearObtainingCoachingDegree,
      records,
      instructors_coaching_courses:instructorsCoachingCourses,
      place_obtaining_coaching_certificates:placeObtainingCoachingCertificates,
      coaching_records:coachingRecords,
      honors,
      executive_professional_records:executiveProfessionalRecords,
      workshops_as_participant:workshopsAsParticipant,
      educational_workshops_as_aeacher:educationalWorkshopsAsTeacher,
      coaching_levels:coachingLevels,
    });
  }

  async deleteTrainer(id) {
    return await this.handlePost(`${BASE_PATH}/a/trainers/delete/${id}`);
  }
}
