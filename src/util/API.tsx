import React from "react";
import { serverUrl } from "@/config/config.json";
import axios from "axios";

const API = axios.create({ baseURL: serverUrl });

export default API;
