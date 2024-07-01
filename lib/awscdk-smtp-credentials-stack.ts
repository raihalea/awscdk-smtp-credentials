import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Mail } from './mail';

export class AwscdkSmtpCredentialsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new Mail(this, "Mail")
  }
}
