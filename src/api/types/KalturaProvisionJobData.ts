
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaProvisionJobDataArgs  extends KalturaJobDataArgs {
    streamID? : string;
	backupStreamID? : string;
	rtmp? : string;
	encoderIP? : string;
	backupEncoderIP? : string;
	encoderPassword? : string;
	encoderUsername? : string;
	endDate? : number;
	returnVal? : string;
	mediaType? : number;
	primaryBroadcastingUrl? : string;
	secondaryBroadcastingUrl? : string;
	streamName? : string;
}


export class KalturaProvisionJobData extends KalturaJobData {

    streamID : string;
	backupStreamID : string;
	rtmp : string;
	encoderIP : string;
	backupEncoderIP : string;
	encoderPassword : string;
	encoderUsername : string;
	endDate : number;
	returnVal : string;
	mediaType : number;
	primaryBroadcastingUrl : string;
	secondaryBroadcastingUrl : string;
	streamName : string;

    constructor(data? : KalturaProvisionJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaProvisionJobData' },
				streamID : { type : 's' },
				backupStreamID : { type : 's' },
				rtmp : { type : 's' },
				encoderIP : { type : 's' },
				backupEncoderIP : { type : 's' },
				encoderPassword : { type : 's' },
				encoderUsername : { type : 's' },
				endDate : { type : 'n' },
				returnVal : { type : 's' },
				mediaType : { type : 'n' },
				primaryBroadcastingUrl : { type : 's' },
				secondaryBroadcastingUrl : { type : 's' },
				streamName : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaProvisionJobData',KalturaProvisionJobData);
