'use client';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const JournalRegistrationForm: React.FC = () => {
  const { handleSubmit, control, register } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="articleTitle" className="block text-sm font-medium text-gray-700">
          Nama Artikel Publikasi
        </label>
        <Input id="articleTitle" {...register('articleTitle', { required: true })} />
      </div>

      <div>
        <label htmlFor="abstract" className="block text-sm font-medium text-gray-700">
          Abstrak Artikel
        </label>
        <Textarea id="abstract" {...register('abstract', { required: true })} />
      </div>

      <div>
        <label htmlFor="authors" className="block text-sm font-medium text-gray-700">
          Penulis Artikel
        </label>
        <Input id="authors" {...register('authors', { required: true })} />
      </div>

      <div>
        <label htmlFor="journal" className="block text-sm font-medium text-gray-700">
          Jurnal Publikasi
        </label>
        <Input id="journal" {...register('journal', { required: true })} />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Rating Jurnal
        </label>
        <Controller
          control={control}
          name="journalRating"
          render={({ field }) => (
            <RadioGroup {...field}>
              <div className="flex items-center space-x-4">
                <RadioGroupItem value="scopus" id="scopus" />
                <label htmlFor="scopus">Scopus</label>

                <RadioGroupItem value="sinta" id="sinta" />
                <label htmlFor="sinta">Sinta</label>

                <RadioGroupItem value="scimago" id="scimago" />
                <label htmlFor="scimago">Scimago</label>
              </div>
            </RadioGroup>
          )}
        />
      </div>

      <div>
        <label htmlFor="ratingStatus" className="block text-sm font-medium text-gray-700">
          Status Rating Jurnal
        </label>
        <Controller
          control={control}
          name="ratingStatus"
          render={({ field }) => (
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger id="ratingStatus">Pilih Status</SelectTrigger>
              <SelectContent>
                <SelectItem value="A">A</SelectItem>
                <SelectItem value="B">B</SelectItem>
                <SelectItem value="C">C</SelectItem>
                <SelectItem value="D">D</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div>
        <label htmlFor="publicationDate" className="block text-sm font-medium text-gray-700">
          Tanggal/Tahun Terbit
        </label>
        <Input type="date" id="publicationDate" {...register('publicationDate', { required: true })} />
      </div>

      <div>
        <label htmlFor="publicationLink" className="block text-sm font-medium text-gray-700">
          Link Publikasi
        </label>
        <Input id="publicationLink" {...register('publicationLink', { required: true })} />
      </div>

      <div>
        <label htmlFor="doi" className="block text-sm font-medium text-gray-700">
          DOI
        </label>
        <Input id="doi" {...register('doi', { required: true })} />
      </div>

      <Button type="submit" className="mt-4 bg-green-800 text-white">
        Daftarkan Jurnal
      </Button>
    </form>
  );
};

export default JournalRegistrationForm;
