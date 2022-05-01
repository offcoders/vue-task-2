import moment from "moment";

export default {
  methods: {
    momentFormat(date: Date, format: string): string {
      return moment(date).format(format);
    },
  },
};
