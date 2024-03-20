"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";

import { Button } from "@/components/ui/button";
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
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const snippetSchema = z.object({
  username: z.string().min(2).max(50),
  codeLanguage: z.string().min(1),
  stdin: z.string(),
  sourceCode: z.string().min(2),
});

export default function SnippetForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof snippetSchema>>({
    resolver: zodResolver(snippetSchema),
    defaultValues: {
      username: "",
      codeLanguage: "",
      stdin: "",
      sourceCode: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof snippetSchema>) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/snippets`,
        data
      );
      console.log("Snippet created:", response.data);
      toast({
        title: "Form Sent",
        description: "Code submitted!",
      });
      form.reset(); // Reset the form after successful submission
    } catch (error) {
      console.error("Error creating snippet:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter Username" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="codeLanguage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Code Language</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Language" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="c++">C++</SelectItem>
                  <SelectItem value="java">Java</SelectItem>
                  <SelectItem value="python">Pyhton</SelectItem>
                  <SelectItem value="golang">GO</SelectItem>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="kotlin">Kotlin</SelectItem>
                  <SelectItem value="typescript">TypeScript</SelectItem>
                  <SelectItem value="rust">Rust</SelectItem>
                  <SelectItem value="ruby">Ruby</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Select the Language of your choice
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="stdin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Standard Input</FormLabel>
              <FormControl>
                <Input placeholder="Description" {...field} />
              </FormControl>
              <FormDescription>
                Add Standard input for test cases.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sourceCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Source Code</FormLabel>
              <FormControl>
                <textarea
                  placeholder="Write Code here"
                  {...field}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  style={{ height: "10rem" }}
                />
              </FormControl>
              <FormDescription>Code Editor</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
