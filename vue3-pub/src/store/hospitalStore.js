import { defineStore } from 'pinia';

export const useHospitalStore = defineStore('hospital', {
  state: () => ({
    hospital: localStorage.getItem('hospital') || 'default', // 기본 병원 클래스
  }),
  actions: {
    initializeHospital() {
      const html = document.documentElement;
      const storedHospital = localStorage.getItem('hospital') || 'default';

      // 기존 병원 클래스 제거 및 새로운 병원 클래스 추가
      html.className = this._updateHospitalClass(html.className, storedHospital);

      // 상태 업데이트
      this.hospital = storedHospital;
    },
    setHospital(hospital) {
      const html = document.documentElement;

      // 기존 병원 클래스 제거 및 새로운 병원 클래스 추가
      html.className = this._updateHospitalClass(html.className, hospital);

      // 상태와 Local Storage 업데이트
      this.hospital = hospital;
      localStorage.setItem('hospital', hospital);

      console.log(`Hospital theme updated to: ${hospital}`);
    },
    _updateHospitalClass(currentClasses, newHospital) {
      // 현재 클래스 문자열을 배열로 분리
      const classList = currentClasses.split(' ');

      // 병원 관련 클래스 필터링 (현재 병원 클래스 제거)
      const filteredClasses = classList.filter(
        (cls) => cls !== this.hospital // 현재 병원 클래스 제거
      );

      // 새로운 병원 클래스 추가
      return [...filteredClasses, newHospital].join(' ');
    },
  },
});
