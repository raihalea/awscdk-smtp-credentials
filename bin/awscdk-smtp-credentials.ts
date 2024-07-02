#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwscdkSmtpCredentialsStack } from '../lib/awscdk-smtp-credentials-stack';
import { awsConfig } from '../lib/config';

const app = new cdk.App();
new AwscdkSmtpCredentialsStack(app, 'AwscdkSmtpCredentialsStack', {
  env: awsConfig
});