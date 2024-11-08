"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import postJobOpening from "./action";

const formSchema = z.object({
  companyName: z.string().min(2, "Mohon Masukkan Nama Perusahaan"),
  position: z.string().min(2, "Mohon Masukkan Nama Posisi"),
  employmentType: z.string().min(2, "Mohon Masukkan Tipe Kontrak"),
  primaryTag: z.string().min(2, "Mohon Masukkan Tag Utama"),
  description: z.string().min(2, "Mohon Masukkan Tag lainnya"),
  isSupport: z.boolean().default(false).optional(),
  isEmailNewsletter: z.boolean().default(false).optional(),
  isHighlight: z.boolean().default(false).optional(),
  isSticky: z.boolean().default(false).optional(),
});

export type HireForm = z.infer<typeof formSchema>;

export default function HireForm() {
  const form = useForm<HireForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      position: "",
      employmentType: "",
      primaryTag: "",
      description: "",
      isSupport: false,
      isEmailNewsletter: false,
      isHighlight: false,
      isSticky: false,
    },
  });

  function onSubmit(values: HireForm) {
    postJobOpening(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="grid grid-cols-3 gap-3">
          <Card className="col-span-2">
            <CardHeader className="text-center">
              <CardTitle>Let's Start</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">
                      NAMA PERUSAAHAAN
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Nama Perusahaan"
                        className="bg-gray-100 focus:bg-white"
                      />
                    </FormControl>
                    <FormDescription>
                      Nama Perusahaan tanpa: Tbk, Inc, etc
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Posisi</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Posisi"
                        className="bg-gray-100 focus:bg-white"
                      />
                    </FormControl>
                    <FormDescription>
                      Silakan tuliskan posisi pekerjaan sebagai satu jabatan,
                      seperti "Marketing Manager" atau "Node JS Developer",
                      bukan sebagai kalimat seperti "Mencari PM / Biz Dev /
                      Manager". Kami tahu pekerjaan Anda penting, namun harap
                      TIDAK MENULIS DENGAN HURUF KAPITAL SEMUA. Jika ingin
                      memposting beberapa posisi, buatlah beberapa iklan
                      pekerjaan terpisah. Setiap iklan hanya untuk satu posisi
                      pekerjaan. Kami hanya mengizinkan pekerjaan nyata, tidak
                      ada kursus MLM atau semacamnya seperti "belajar cara
                      bekerja online".
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="employmentType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Tipe Kontrak</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Tipe"
                        className="bg-gray-100 focus:bg-white"
                      />
                    </FormControl>
                    <FormDescription>
                      Tipe Kontrak: Full-time, Part-time, Freelance
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="primaryTag"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Tag Utama</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Tag Utama"
                        className="bg-gray-100 focus:bg-white"
                      />
                    </FormControl>
                    <FormDescription>
                      Masukkan Tag Utama yang akan ditampilkan
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">
                      Deskripsi Pekerjaan
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Deskripsi Pekerjaan"
                        className="bg-gray-100 focus:bg-white"
                      />
                    </FormControl>
                    <FormDescription>Deskripsi Pekerjaan</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
          <Card className="self-start">
            <CardHeader>
              <CardTitle>Desain Postingan Anda</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="isSupport"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="capitalize">
                        Dapatkan Support dan Bantuan Premium dari Kami untuk
                        Lowongan Anda
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isEmailNewsletter"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="capitalize">
                        Kirimkan email kepada pengguna Remotify terkait
                        postingan anda
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isHighlight"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="capitalize">
                        Highlight job posting anda dengan warna
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isSticky"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="capitalize">
                        Letakkan postingan anda dihalaman depan dan bagian
                        teratas
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </CardContent>
            <div className="m-4 flex justify-end">
              <Button type="submit">Submit</Button>
            </div>
          </Card>
        </div>
      </form>
    </Form>
  );
}
