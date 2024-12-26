import { formSchema } from "@/schemas/forms";
import * as z from "zod";

export type FormSchema = z.infer<typeof formSchema>;